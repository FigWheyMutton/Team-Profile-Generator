const inquirer = require ('inquirer')
const Employee = require('./Employee')
const Manager = require('./Manager')
const Intern = require('./intern')
const { describe } = require('yargs')
const { it } = require('node:test')
inquirer.prompt([
    {
        name: 'EmployeeType',
        message: 'What type of employee are you?',
        choices: ['Manager', 'Engineer', 'Intern'],
        type: 'checkbox'
    },
    {
        name: 'EngineerName',
        message:'What is your name?', 
        type: 'input',
        when: (answers) => {
            if(answers.employeeType === 'Engineer') {
                return true
            }
        }
    },
    {
        name: 'EngineerId',
        message:'What is your Id number', 
        type: 'input', 
        when: (answers) => {
            if(answers.employeeType === 'EngineerEngineer') {
                return true
            }
        }
    },
    {
         name: 'EngineerEmail',
         message:'What is your email?', 
         type: 'input', 
         when: (answers) => {
            if(answers.employeeType === 'Engineer') {
                return true
            }
        }
    },
    {
        name: 'Github',
        message:'What is your github account?', 
        type: 'input',
        when: (answers) => {
            if(answers.employeeType === 'Engineer') {
                return true
            }
        }
    },
    ]).then((answers) => {
        if (answers.EmployeeType == "Manager") {
            inquirer.createPromptModule([
            {
                name: 'ManagerName',
                message:'What is your name?', 
                type: 'input',

            },
            {
                name: 'ManagerId',
                message:'What is your Id number', 
                type: 'input', 

            },
            {
                 name: 'ManagerEmail',
                 message:'What is your email?', 
                 type: 'input',

            },
            {
                name: 'ManagerOffice',
                message:'What is your office number?', 
                type: 'input', 
            },]
    )}
    })

describe('Employee', () => {
    describe('Instantiation', () => {
        it('Should create an instance of the class Employee', () => {
                // Act
                const newEmp = new Employee();
                // Assert
                expect(typeof newEmp).toEqual('object');
    })
    //Testing that you can correctly set, for example, the name property, of an employee instance would look like so:
    it('Should set name via constructor arguments', () => {
    // Arrange
    const testValue = 'Pollux';
    // Act
    const newEmp = new Employee(testValue);
    // Assert
    expect(newEmp.name).toEqual(testValue);
    })
// Testing, for example, that you can get the correct output from the getName() method of an employee instance would look like so:
    it('Should get name via getName()', () => {
    // Arrange
    const testValue = 'Pollux';
    const newEmp = new Employee(testValue);
    // Act
    const empName = newEmp.getName()
    // Assert
    expect(empName).toEqual(testValue);
})
})



