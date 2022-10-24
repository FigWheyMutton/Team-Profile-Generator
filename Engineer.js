const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name,id, email)
        this.engineerName = name,
        this.engineerId = id,
        this.engineerEmail = email,
        this.gitHub = gitHub
        this.isEngineer = 'Engineer';
    }
    getGithub() {
        console.log(`${this.engineerName}'s Github account is ${this.gitHub}`)
    }
    getRole() {
        console.log(`His role here is as an ${this.isEngineer}`)
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