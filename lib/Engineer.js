const Employee = require("./employee");

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
        return this.gitHub
    }
    getRole() {
        return this.Engineer
    }
}

const engineer = new Engineer('fred', 4, 'asdfh12@gmail.com', 'figwheymutton')


module.exports = Engineer;