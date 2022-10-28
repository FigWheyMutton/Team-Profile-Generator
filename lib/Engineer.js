const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name,id, email)

        this.gitHub = gitHub
        this.EngineerRole = 'Engineer';
    }
    getGithub() {
        return this.gitHub
    }
    getRole() {
        return this.EngineerRole
    }
}

const engineer = new Engineer('fred', 4, 'asdfh12@gmail.com', 'figwheymutton')


module.exports = Engineer;