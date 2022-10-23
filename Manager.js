class Manager {
    constructor(name, id, email, officeNum) {
        this.ManagerName = name,
        this.ManagerId = id,
        this.ManagerEmail = email;
        this.isManager = true
    }
    getName() {
        console.log(`This employees name is ${this.employeeName}`)
    }
    getId() {
        console.log(`The employee's ID number is ${this.employeeId}`)
    }
    getEmail() {
        console.log(`The employee email is ${this.employeeEmail}`)
    }
    getRole() {
        console.log(`Their role here is ${this.isEmployee}`)
    }
}