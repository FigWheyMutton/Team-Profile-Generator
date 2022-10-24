const Employee = require("./lib/employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name,id, email)
        this.engineerName = name,
        this.engineerId = id,
        this.engineerEmail = email,
        this.gitHub = gitHub
        this.Engineer = 'An Engineer';
    }
    getGithub() {
        console.log(`${this.gitHub}`)
    }
    getRole() {
        console.log(`${this.Engineer}`)
    }
}

const engineer = new Engineer('fred', 4, 'asdfh12@gmail.com', 'figwheymutton')

console.log('---Engineer---')
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getRole();
engineer.getGithub();
module.exports = Engineer;