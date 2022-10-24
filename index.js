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
    ]).then((answers) => {
    console.log(answers.EmployeeType)
    if (answers.EmployeeType === 'Manager') {
        createManager();
    }
    if (answers.EmployeeType === 'Engineer') {
        createEngineer();
    }
    if (answers.EmployeeType === 'Intern') {
        createIntern();
    }
    if (answers.EmployeeType === 'I dont want to add more') {
        const answerStr = writeHtml(JSON.stringify(answers))
        //    writeMembers(answerStr)
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
        ]).then (answers => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOfficeNum,
            );
            employees.push(manager);
            employeeId.push(answers.managerId);
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
            ]).then (answers => {
                const engineer = new Engineer(
                    answers.EngineerName,
                    answers.EngineerId,
                    answers.EngineerEmail,
                    answers.Github,
                );
                employees.push(engineer);
                employeeId.push(answers.engineerId);
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
        ]).then (answers => {
            const intern = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.school,
            );
            employees.push(intern);
            employeeId.push(answers.internId);
            StartQuestion()
        })
}

function writeHtml(answerStr) {
    console.log(employees)
    const htmlBase = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css" />
    <title>Team Builder</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
    <h1 class="display-4">My Team</h1>
    </div>
    <div id="cards" class="container2">
    
    
    </div>
    </div>
    </body>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="./assets/js/script.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    </html>  `
    fs.writeFile('./dist/team.html', htmlBase, (err) => {
        err? console.log(err)
        : console.log('Member Html created')
    })
    return   
}


const cards =    ` <div class="card" style="width: 18rem;">
<div class="card-body">
    <h1 class="card-title">Name</h1>
    <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
    <h2 class="card-text">Status</h2>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID</li>
    <li class="list-group-item">Email</li>
    <li class="list-group-item">OfficeNum</li>
</ul>
</div> `