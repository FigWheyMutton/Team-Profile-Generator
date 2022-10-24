const Employee = require('./employee');

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email)
        this.internName = name,
        this.internId = id,
        this.internEmail = email,
        this.school = school,
        this.intern = 'An Intern';
    }
    getSchool() {
        console.log(`${this.school}`)
    }
    getRole() {
        console.log(`${this.intern}`)
    }
}

module.exports = Intern;