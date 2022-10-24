const Employee = require("./lib/employee");

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

const manager = new Manager('bossman', 1, 'danielfigw23@gmail.com', 23)

console.log('---Manager---')
manager.getName();
manager.getId();
manager.getEmail();
manager.getRole();
manager.officeNumber();

module.exports = Manager;