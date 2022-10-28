// const arr = [
//     {
//         name: "Cloud",
//         type: "Dog"
//     },
//     {
//         name: "Soul",
//         type: "Dog"
//     },
//     {
//         name: "Phoenix",
//         type: "Cat"
//     },
//     {
//         name: "Atticus",
//         type: "Cat"
//     },
//     {
//         name: "Mia",
//         type: "Dog"
//     },
// ]

// function generateHtml(obj) {
//     return `
// My dog's name is ${obj.name}`
// }

// const newArr = arr.filter(item => item.type === "Dog").map(item => console.log(generateHtml(item)))

const arr = [1, 2, 3, 4]

const newArr = arr.map(number => number*2) // [2, 4, 6, 8]

const newestArr = [];
arr.forEach(number => newestArr.push(number*2)) // because for each does not return a new arr I have to push

console.log(arr)
console.log(newArr)
console.log(newestArr)