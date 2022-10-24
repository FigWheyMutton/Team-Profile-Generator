const inquirer = require('inquirer')

class Employee {
    constructor(name, id, email) {
        this.employeeName = name,
        this.employeeId = id,
        this.employeeEmail = email,
        this.employee = 'an Employee';
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




module.exports = Employee;