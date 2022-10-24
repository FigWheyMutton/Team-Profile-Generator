const Intern = require ('../lib/intern')
const Employee = require('../lib/employee')

test('Instantiation', () => {
            // Act
            const newInt = new Intern();
            // Assert
            expect(typeof newInt).toEqual('object');
})
test("Can set School Name via constructor argument", () => {
    const testVal = 'UCLA';
    const testName = new Intern('Ross', 4, 'ross@gmail.com', 'UCLA');
    expect(testName.school).toBe(testVal);
});
test('Can receive the "intern" role from getRole()', () => {
    const testVal = 'An Intern';
    const testName = new Intern('Ross', 4, 'ross@gmail.com', 'UCLA')
    expect(testName.getRole()).toBe(testVal);
});
test('Check to see that the getSchool() method gives the correct output',() => {
    const testVal = 'UCLA';
    const testName = new Intern('Ross', 4, 'ross@gmail.com', 'UCLA')
    expect(testName.getSchool()).toBe(testVal)
})

