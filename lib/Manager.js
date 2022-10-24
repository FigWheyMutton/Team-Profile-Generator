const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, id, email, officeNum) {
        super(name,id,email)
        this.ManagerName = name,
        this.ManagerId = id,
        this.ManagerEmail = email,
        this.officeNum = officeNum,
        this.position = 'manager';
    }
   officeNumber() {
    console.log(`Office Number: ${this.officeNum}`)
   }
   getRole() {
    console.log(`Role: An ${this.position}`)
   }
}

module.exports = Manager;