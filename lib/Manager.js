const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, id, email, officeNum) {
        super(name,id,email)
        this.ManagerName = name,
        this.ManagerId = id,
        this.ManagerEmail = email,
        this.officeNum = officeNum,
        this.position = 'Manager';
    }
   officeNumber() {
    return this.officeNum
   }
   getRole() {
    return this.position
   }
}

module.exports = Manager;