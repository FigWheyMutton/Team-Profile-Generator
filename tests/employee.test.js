const Employee = require('../lib/employee')

test('Instantiation', () => {
            // Act
            const newEmp = new Employee();
            // Assert
            expect(typeof newEmp).toEqual('object');
})
test("Can I set the Name with constructor? ", () => {
    const testVal = 'Luffy';
    const testName = new Employee('Luffy',5, 'luffyonepiece@gmail.com');
    expect(testName.employeeName).toBe(testVal);
});
test('Can I get Id through constructors?', () => {
    const testVal = 5;
    const testName = new Employee('Luffy',5, 'luffyonepiece@gmail.com')
    expect(testName.employeeId).toBe(testVal);
});
test('Check to see that the employee email constructor gives the correct output',() => {
    const testVal = 'UCLA';
    const testName = new Employee('Luffy',5, 'luffyonepiece@gmail.com')
    expect(testName.employeeEmail).toBe(testVal)
})
test('Check to see that the getName() works correctly',() => {
    const testVal = 'Luffy';
    const testName = new Employee('Luffy',5, 'luffyonepiece@gmail.com')
    expect(testName.employeeEmail).toBe(testVal)
})
test('Check to see that the getId() works correctly',() => {
    const testVal = 5;
    const testName = new Employee('Luffy',5, 'luffyonepiece@gmail.com')
    expect(testName.employeeEmail).toBe(testVal)
})
test('Check to see that getEmail() works correctly',() => {
    const testVal = 'luffyonepiece@gmail.com';
    const testName = new Employee('Luffy',5, 'luffyonepiece@gmail.com')
    expect(testName.employeeEmail).toBe(testVal)
})
test('check to see that getRole() gives the correct output',() => {
    const testVal = 'Employee';
    const testName = new Employee('Luffy',5, 'luffyonepiece@gmail.com')
    expect(testName.employeeEmail).toBe(testVal)
})
