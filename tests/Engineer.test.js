const Engineer = require('../lib/Engineer');
const Employee = require('../lib/employee');


test('Instantiation', () => {
    const newEngineer = new Engineer();
    expect(typeof newEngineer).toEqual('object'); 
})
test("Can I set the github property using constructor arguements", () => {
    const testVal = 'figwheymutton';
    const testName = new Engineer('owen', 3, 'engineerboss@gmail.com', 'figwheymutton');
    expect(testName.gitHub).toBe(testVal);
});
test('Can receive the " an engineer" role from getRole()', () => {
    const testVal = 'An Engineer';
    const testName = new Engineer('owen', 3, 'engineerboss@gmail.com', 'figwheymutton')
    expect(testName.getRole()).toBe(testVal);
});
test('Check to see that the github method gives the correct output',() => {
    const testVal = 'figwheymutton';
    const testName = new Engineer('owen', 3, 'engineerboss@gmail.com', 'figwheymutton')
    expect(testName.getGithub()).toBe(testVal)
})
