const inquirer = require('inquirer')

class Employee {
    constructor(name, id, email) {
        this.employeeName = name,
        this.employeeId = id,
        this.employeeEmail = email,
        this.isEmployee = true;
    }
    getName() {
        console.log(`This employees name is ${this.employeeName}`)
    }
    getId() {
        console.log(`The employee's ID number is ${this.employeeId}`)
    }
    getEmail() {
        console.log(`The employee email is ${this.employeeEmail}`)
    }
    getRole() {
        this.isEmployee = 'an employee'
        console.log(`Role: ${this.isEmployee}`)
    }
}

const user1 = new Employee('Alex', 1, 'alexhsih12@gmail.com')
console.log('---Employee---')
user1.getName();
user1.getId();
user1.getEmail();
user1.getRole();

module.exports = Employee;