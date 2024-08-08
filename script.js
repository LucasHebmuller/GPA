let semesterCount = 1;

function calculateSemesterGPA(semesterIndex) {
    const semesterForms = document.querySelectorAll('.semester_gpa');
    const semesterForm = semesterForms[semesterIndex];
    const gradeElements = semesterForm.querySelectorAll('.grade-select');
    const creditElements = semesterForm.querySelectorAll('.credits-input');

    let totalPoints = 0;
    let totalCredits = 0;

    gradeElements.forEach((gradeElement, index) => {
        const grade = gradeElement.value;
        const credits = parseFloat(creditElements[index].value);

        if (!isNaN(credits) && credits > 0 && grade !== '-') {
            let gradePoints = 0;
            switch(grade) {
                case 'A':
                    gradePoints = 4.0;
                    break;
                case 'A-':
                    gradePoints = 3.7;
                    break;
                case 'B+':
                    gradePoints = 3.3;
                    break;
                case 'B':
                    gradePoints = 3.0;
                    break;
                case 'B-':
                    gradePoints = 2.7;
                    break;
                case 'C+':
                    gradePoints = 2.3;
                    break;
                case 'C':
                    gradePoints = 2.0;
                    break;
                case 'C-':
                    gradePoints = 1.7;
                    break;
                case 'D+':
                    gradePoints = 1.3;
                    break;
                case 'D':
                    gradePoints = 1.0;
                    break;
                case 'F':
                    gradePoints = 0.0;
                    break;
                default:
                    gradePoints = 0.0;
                    break;
            }
            totalPoints += gradePoints * credits;
            totalCredits += credits;
        }
    });

    const semesterGPA = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
    let semesterContainer = document.querySelectorAll('.semester-container')[semesterIndex];
    let gpaHeader = semesterContainer.querySelector('h3');
    gpaHeader.innerHTML = `Semester ${semesterIndex + 1} GPA: <span class="number">${semesterGPA}</span>`;

    calculateOverallGPA();
}

function calculateOverallGPA() {
    const semesterForms = document.querySelectorAll('.semester_gpa');
    let totalPoints = 0;
    let totalCredits = 0;

    semesterForms.forEach((semesterForm, semesterIndex) => {
        const gradeElements = semesterForm.querySelectorAll('.grade-select');
        const creditElements = semesterForm.querySelectorAll('.credits-input');

        gradeElements.forEach((gradeElement, index) => {
            const grade = gradeElement.value;
            const credits = parseFloat(creditElements[index].value);

            if (!isNaN(credits) && credits > 0 && grade !== '-') {
                let gradePoints = 0;
                switch(grade) {
                    case 'A':
                        gradePoints = 4.0;
                        break;
                    case 'A-':
                        gradePoints = 3.7;
                        break;
                    case 'B+':
                        gradePoints = 3.3;
                        break;
                    case 'B':
                        gradePoints = 3.0;
                        break;
                    case 'B-':
                        gradePoints = 2.7;
                        break;
                    case 'C+':
                        gradePoints = 2.3;
                        break;
                    case 'C':
                        gradePoints = 2.0;
                        break;
                    case 'C-':
                        gradePoints = 1.7;
                        break;
                    case 'D+':
                        gradePoints = 1.3;
                        break;
                    case 'D':
                        gradePoints = 1.0;
                        break;
                    case 'F':
                        gradePoints = 0.0;
                        break;
                    default:
                        gradePoints = 0.0;
                        break;
                }
                totalPoints += gradePoints * credits;
                totalCredits += credits;
            }
        });
    });

    const overallGPA = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
    const overallGPAContainer = document.getElementById('overall_gpa');
    overallGPAContainer.querySelector('h2').innerHTML = `Overall GPA: <span class="number">${overallGPA}</span>`;
}

function addCourse(semesterIndex) {
    const semesterContainers = document.querySelectorAll('.semester-container');
    const semesterForm = semesterContainers[semesterIndex].querySelector('.semester_gpa');

    const newCourse = document.createElement('div');
    newCourse.className = 'course';

    newCourse.innerHTML = `
        <label for="icourse">Course: </label>
        <input type="text" name="course" class="course-input" placeholder="Course name">

        <label for="igrade">Grade: </label>
        <select name="grade" class="grade-select">
            <option value="-" selected></option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
            <option value="D+">D+</option>
            <option value="D">D</option>
            <option value="D-">D-</option>
            <option value="F">F</option>
        </select>

        <label for="icredits">Credits: </label>
        <input type="number" name="credits" class="credits-input">
    `;

    semesterForm.appendChild(newCourse);

    // Recalculate GPA when a course is added
    calculateSemesterGPA(semesterIndex);
}

function addSemester() {
    semesterCount++;
    const semestersContainer = document.getElementById('semestersContainer');

    const semesterContainer = document.createElement('div');
    semesterContainer.className = 'semester-container';

    const newSemester = document.createElement('form');
    newSemester.className = 'semester_gpa';
    newSemester.innerHTML = `
        <h3>Semester ${semesterCount} GPA: </h3>
    `;

    semesterContainer.appendChild(newSemester);
    semestersContainer.appendChild(semesterContainer);

    // Add four initial courses
    for (let i = 0; i < 4; i++) {
        addCourse(semesterCount - 1);
    }

    const addCourseButton = document.createElement('input');
    addCourseButton.type = 'button';
    addCourseButton.value = 'Add Course';
    addCourseButton.onclick = () => addCourse(semesterCount - 1);
    semesterContainer.appendChild(addCourseButton);

    const calculateButton = document.createElement('input');
    calculateButton.type = 'button';
    calculateButton.value = 'Calculate GPA';
    calculateButton.onclick = () => calculateSemesterGPA(semesterCount - 1);
    semesterContainer.appendChild(calculateButton);
}

document.addEventListener('DOMContentLoaded', () => {
    calculateSemesterGPA(0);
});
