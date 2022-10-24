const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email)
        this.internName = name,
        this.internId = id,
        this.internEmail = email,
        this.school = school,
        this.isIntern = 'Intern';
    }
    getSchool() {
        console.log(`${this.internName} goes to ${this.school}`)
    }
    getRole() {
        console.log(`${this.internName} is an ${this.isIntern}`)
    }
}

const intern = new Employee('Alex', 1, 'alexhsih12@gmail.com')
console.log('---Employee---')
intern.getName();
intern.getId();
intern.getEmail();
intern.getRole();
intern.getSchool();

module.exports = Intern;