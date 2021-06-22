'use strict'

let arrofGrades = []
let mainTable = document.getElementById('table')
let eventform = document.getElementById('mainForm')

function randomNumber() {
    return Math.floor(Math.random() * 100);

}
console.log(randomNumber());

function Grades(studant, course) {
    this.studName = studant;
    this.StudGrade = randomNumber();
    this.courseName = course;
    this.status = status;
    this.allVar = [this.studName, this.StudGrade, this.courseName, this.status]
    arrofGrades.push(this)
}

storeTable()
saveTotal()

eventform.addEventListener('submit', handleformEvent)

function handleformEvent(event) {
    event.preventDefault();
    let inputName = event.target.studName.value
    console.log(inputName);
    let courseName = event.target.courseName.value
    console.log(courseName);

    let inputGrades = new Grades(inputName, courseName)
    inputGrades.render()
    saveData()

}

Grades.prototype.render = function() {
    let tableRow1 = document.createElement('tr')
    mainTable.appendChild(tableRow1)
    for (let i = 0; i < this.allVar.length; i++) {
        let tableEl1 = document.createElement('th')
        tableRow1.appendChild(tableEl1)
        tableEl1.textContent = this.allVar[i]

    }

    if (this.StudGrade > 49) {
        console.log('Success');
        status = 'Success'

    } else if (this.StudGrade <= 49) {
        console.log('Fail');
        status = 'Fail'
    }

}

function saveData() {
    let arrStorage = JSON.stringify(arrofGrades)
    localStorage.setItem('gradeData', arrStorage)
        // console.log(arrStorage);
}

function saveTotal() {
    let getData = JSON.parse(localStorage.getItem('gradeData'))
    if (getData) {
        arrofGrades = getData;
    }
    console.log(getData);
}

/// for save the table
function storeTable() {
    for (let i = 0; i < arrofGrades.length; i++) {
        let tableRow2 = document.createElement('tr')
        console.log(arrofGrades[i].allVar.length);
        console.log('arrofGrades[i].allVar.length');
        mainTable.appendChild(tableRow2)
        for (let y = 0; y < arrofGrades[i].allVar.length; y++) {
            console.log(arrofGrades[i].allVar.length);
            let tableEl2 = document.createElement('th')
            tableRow2.appendChild(tableEl2)
            tableEl2.textContent = this.arrofGrades[i].this.allVar[y]
        }
    }

}