const Manager = require('../lib/Manager');
const Employee = require('../lib/employee');


test('Instantiation', () => {
    const newManager = new Manager();
    expect(typeof newManager).toEqual('object'); 
})
test("Can I set the office number property via constructor arguements", () => {
    const testVal = '123';
    const testName = new Manager('Bossman', 1, 'bossman123@gmail.com', '123');
    expect(testName.officeNum).toBe(testVal);
});
test('Can receive the "manager" role from getRole()', () => {
    const testVal = 'Manager';
    const testName = new Manager('Bossman', 4, 'bossman123@gmail.com', '123')
    expect(testName.getRole()).toBe(testVal);
});
test('Check to see that the get office number method gives the correct output',() => {
    const testVal = '123';
    const testName = new Manager('Bossman', 4, 'bossman123@gmail.com', '123')
    expect(testName.officeNumber()).toBe(testVal)
})
