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

function calculateTermGpa() {
   return termPoints[termCount] / termCredits[termCount]
}

function calculateOverallGpa() {
    let allPoints = 0
    let allCredits = 0

    for (let i = 0; i <= termCount; i++) {
        allPoints += termPoints[i]
        allCredits += termCredits[i]
    }

    return allPoints / allCredits
}

let overallContainer = document.querySelector('div#cumulative_gpa h2')
overallContainer.innerHTML += `<span class="number">${overallGpa}</span>`

let termContainer = document.querySelector('div.term_gpa h3')
termContainer.innerHTML += `<span class="number">${termGpa[termCount]}</span>`