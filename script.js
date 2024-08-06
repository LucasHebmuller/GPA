let semesterCount = 1
let courseCount = [4] // course for each semester

function calculateSemesterGPA() {
    // Select all elements with the class 'igrade'
    const grades = document.querySelectorAll('.igrade');
    let totalPoints = 0;
    let totalCredits = 0;

    grades.forEach(grade => {
        const value = grade.value;
        const credits = parseFloat(grade.getAttribute('icredits'));
        if (value && credits) {
            let gradePoints = 0;
            switch(value) {
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

    // Calculate the semester GPA
    const semesterGPA = totalPoints / totalCredits;

    // Display the semester GPA in the designated container
    let semesterContainer = document.querySelector('.semester_gpa h3');
    semesterContainer.innerHTML += `<span class="number">${semesterGPA.toFixed(2)}</span>`;
}

