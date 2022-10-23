const inquirer = require('inquirer')

class Employee {
    constructor(name, id, email) {
        this.employeeName = name,
        this.employeeId = id,
        this.employeeEmail = email;
        this.isEmployee = true
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
        console.log(`Their role here is ${this.isEmployee}`)
    }
}



module.exports = Employee;


 // {
    //     name: 'EngineerName2',
    //     message:'What is your name?', 
    //     type: 'input'
    // },
    // {
    //     name: 'EngineerId2',
    //     message:'What is your Id number', 
    //     type: 'input' 
    // },
    // {
    //      name: 'EngineerEmail2',
    //      message:'What is your email?', 
    //      type: 'input' 
    // },
    // {
    //     name: 'EngineerGithub2',
    //     message:'What is your office number?', 
    //     type: 'input' 
    // },
    // {
    //     name: 'EngineerName3',
    //     message:'What is your name?', 
    //     type: 'input'
    // },
    // {
    //     name: 'EngineerId3',
    //     message:'What is your Id number', 
    //     type: 'input' 
    // },
    // {
    //      name: 'EngineerGithub3',
    //      message:'What is your email?', 
    //      type: 'input' 
    // },
    // {
    //     name: 'ManagerOffice',
    //     message:'What is your office number?', 
    //     type: 'input' 
    // },
    // {
    //     name: 'InternName',
    //     message:'What is your name?', 
    //     type: 'input'
    // },
    // {
    //     name: 'InternId',
    //     message:'What is your Id number', 
    //     type: 'input' 
    // },
    // {
    //      name: 'InternEmail',
    //      message:'What is your email?', 
    //      type: 'input' 
    // },
    // {
    //     name: 'InternSchool',
    //     message:'What is your school name?', 
    //     type: 'input' 
    // },   