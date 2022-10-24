const inquirer = require ('inquirer')
const Employee = require('./lib/employee')
const Manager = require('./lib/Manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/Engineer')
const fs = require('fs');

menu()
const employees = [];
const employeeId= [];
function menu() {
    StartQuestion()
    function StartQuestion() {
    inquirer.prompt([
        {
            name: 'EmployeeType',
            message: 'What type of employee are you?',
            choices: ['Manager', 'Engineer', 'Intern', "I dont want to add more"],
            type: 'list'
        },
    ]).then((employeeAnswer) => {
    console.log(employeeAnswer.EmployeeType)
    if (employeeAnswer.EmployeeType === 'Manager') {
        createManager();
    }
    if (employeeAnswer.EmployeeType === 'Engineer') {
        createEngineer();
    }
    if (employeeAnswer.EmployeeType === 'Intern') {
        createIntern();
    }
    if (employeeAnswer.EmployeeType === 'I dont want to add more') {
        fs.writeFile('Team Members.html', userInput, (err) => {
            err ? console.log(err)
            :console.log('Members Index Created')
        }) 
    }
})}
    function createManager() {
        inquirer.prompt([
            {
                            name: 'managerName',
                            message:'What is your name?', 
                            type: 'input',
            },
            {
                        name: 'managerId',
                        message:'What is your Id number', 
                        type: 'input', 
                
                    },
                    {
                         name: 'managerEmail',
                         message:'What is your email?', 
                         type: 'input',
                
                    },
                    {
                        name: 'managerOfficeNum',
                        message:'What is your office number?', 
                        type: 'input', 
                    },
        ]).then (managerAnswers => {
            const manager = new Manager(
                managerAnswers.managerName,
                managerAnswers.managerId,
                managerAnswers.managerEmail,
                managerAnswers.managerOfficeNum,
            );
            employees.push(manager);
            employeeId.push(managerAnswers.managerId);
            StartQuestion()
        })
    }
    
    function createEngineer() {
           inquirer.prompt([
                {
                    name: 'EngineerName',
                    message:'What is your name?', 
                    type: 'input',
                    
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
                },
                {
                    name: 'Github',
                    message:'What is your github account?', 
                    type: 'input',
                },
            ]).then (engineerAnswers => {
                const engineer = new Engineer(
                    engineerAnswers.EngineerName,
                    engineerAnswers.EngineerId,
                    engineerAnswers.EngineerEmail,
                    engineerAnswers.Github,
                );
                employees.push(engineer);
                employeeId.push(engineerAnswers.engineerId);
                StartQuestion()
            })
    }
}
    function createIntern() {
        inquirer.prompt([
            {
                name: 'internName',
                message:'What is your name?', 
                type: 'input',
                
            },
            {
                name: 'internId',
                message:'What is your Id number', 
                type: 'input', 
            },
            {
                 name: 'internEmail',
                 message:'What is your email?', 
                 type: 'input', 
            },
            {
                name: 'school',
                message:'What is your school name?', 
                type: 'input',
            },
        ]).then (internAnswers => {
            const intern = new Intern(
                internAnswers.internName,
                internAnswers.internId,
                internAnswers.internEmail,
                internAnswers.school,
            );
            employees.push(intern);
            employeeId.push(internAnswers.internId);
            StartQuestion()
        })
}




// inquirer.prompt([

//     {
//         when: (answers) => {
//             return answers.employeeType == 'Engineer'
//         },
//         name: 'EngineerName',
//         message:'What is your name?', 
//         type: 'input',
        
//     },
//     {
//         name: 'EngineerId',
//         message:'What is your Id number', 
//         type: 'input', 
//         when: (answers) => {
//             if(answers.employeeType === 'EngineerEngineer') {
//                 return true
//             }
//         }
//     },
//     {
//          name: 'EngineerEmail',
//          message:'What is your email?', 
//          type: 'input', 
//          when: (answers) => {
//             if(answers.employeeType === 'Engineer') {
//                 return true
//             }
//         }
//     },
//     {
//         name: 'Github',
//         message:'What is your github account?', 
//         type: 'input',
//         when: (answers) => {
//             if(answers.employeeType === 'Engineer') {
//                 return true
//             }
//         }
//     },
//     ]).then((answers) => {
//         const htmlContent = generateHtml(answers)
//       

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
})



// if (answers.EmployeeType == "Manager") {
//     inquirer.createPromptModule([
//     {
//         name: 'ManagerName',
//         message:'What is your name?', 
//         type: 'input',

//     },
//     {
//         name: 'ManagerId',
//         message:'What is your Id number', 
//         type: 'input', 

//     },
//     {
//          name: 'ManagerEmail',
//          message:'What is your email?', 
//          type: 'input',

//     },
//     {
//         name: 'ManagerOffice',
//         message:'What is your office number?', 
//         type: 'input', 
//     },]
// )}