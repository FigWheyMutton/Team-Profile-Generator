const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, id, email, officeNum) {
        super(name,id,email)

        this.officeNum = officeNum,
        this.managerRole = 'Manager';
    }
   officeNumber() {
    return this.officeNum
   }
   getRole() {
    return this.managerRole
   }
}

module.exports = Manager;