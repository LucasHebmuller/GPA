let semesterCount = 1
let courseCount = [4] // course for each semester

function calculateSemesterGPA(form) {
    const grades = form.querySelectorAll('.igrade')
    let points = 0
    let credits = 0

    grades.forEach(grade => {
        const value = grade.value
        if (value) {
            switch(value) {
                case 'A':
                    points += 4.0
                    break
                case 'A-':
                    points += 3.7
                    break
                case 'B+':
                    points += 3.3
                    break
                case 'B':
                    points += 3.0
                    break
                case 'B-':
                    points += 2.7
                    break
                case 'C+':
                    points += 2.3
                    break
                case 'C':
                    points += 2.0
                    break
                case 'C-':
                    points += 1.7
                    break
                case 'D+':
                    points += 1.3
                    break
                case 'D':
                    points += 1.0
                    break
                case 'F':
                    points += 0.0
                    break
                default:
                    points += 0.0
                    break
            }
        }

        const credit = form.querySelectorAll('.icredits')
        credits += credit
    })

    const semesterGPA = points / credits

    let semesterContainer = form.querySelector('div.semester_gpa h3')
    semesterContainer.innerHTML += `<span class="number">${semesterGPA}</span>`
    semesterContainer.innerHTML += 'teste'

    calculateOverallGPA()
}

function calculateOverallGPA() {

}

// Initial setup: add event listeners to existing course inputs
document.querySelectorAll('.igrade').forEach(input => {
    input.addEventListener('input', () => calculateSemesterGPA(input.closest('.semester_gpa')))
})
    

/*
let overallGpa = 0
let termCount = 0
let termGpa = [0]
let termPoints = [0]
let termCredits = [0]

function enterGrade() {
    let grade = document.getElementById('igrade')
    let credits = document.getElementById('icredits')

    termCredits[termCount] += credits

    if(grade == "A")
        termPoints[termCount] += (4 * credits)
    else if(grade == "A-")
        termPoints[termCount] += (3.7 * credits)
    else if(grade == "B+")
        termPoints[termCount] += (3.3 * credits)
    else if(grade == "B")
        termPoints[termCount] += (3 * credits)
    else if(grade == "B-")
        termPoints[termCount] += (2.7 * credits)
    else if(grade == "C+")
        termPoints[termCount] += (2.3 * credits)
    else if(grade == "C")
        termPoints[termCount] += (2 * credits)
    else if(grade == "C-")
        termPoints[termCount] += (1.7 * credits)
    else if(grade == "D+")
        termPoints[termCount] += (1.3 * credits)
    else if(grade == "D")
        termPoints[termCount] += (1 * credits)
    else if(grade == "D-")
        termPoints[termCount] += (0.7 * credits)
    else if(grade == "F")
        termPoints[termCount] += (0 * credits)
}

let overallContainer = document.querySelector('div#cumulative_gpa h2')
overallContainer.innerHTML += `<span class="number">${overallGpa}</span>`

let termContainer = document.querySelector('div.term_gpa h3')
termContainer.innerHTML += `<span class="number">${termGpa[termCount]}</span>`
*/