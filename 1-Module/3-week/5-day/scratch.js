// forEach

// let nums = [1, 2, 3, 4]

// let arr = []

// // general syntax
// arr.forEach(el => {}) /* do something for each el */

// // some examples below
// // console.logging
// nums.forEach(num => console.log(num))

// // creating a new arr
// let newArr = []

// nums.forEach(num => {
//     newArr.push(num * 100)
// } )

// // console.log(newArr)

// // getting the sum of all elements
// let sum = 0

// nums.forEach(num => {
//     sum += num
// })

// // console.log(sum)

// map
// let arr = [1, 2, 3, 4]

// // some examples below
// // collecting new numbers given an arr of numbers
// let mapped = arr.map(el => el * 100)

// console.log(arr) // the original array is not mutated
// console.log(mapped)

// // mapping out an arr of objects
// let objs = arr.map(el => {
//     let obj = {}

//     obj.number = el

//     return obj
// })

// console.log(objs)

// filter

// let arr = [1, 2, 3, 4]

// let filtered = arr.filter(el => {
//     if (el % 2 ===  0) return true
//     else return false
// })

// let filtered = arr.filter(el => (el % 2 ===  0))

// console.log(arr)
// console.log(filtered)

// find

// let arr = [
//     {name: 'Edward', favNintendoSeries: 'Mario'},
//     {name: 'Blake', favNintendoSeries: 'Pokemon'},
//     {name: 'Caleb', favNintendoSeries: 'The Legend of Zelda'},
//     {name: 'Mark', favNintendoSeries: 'Mario'},
//     {name: 'Julia', favNintendoSeries: 'Pokemon'},
//     {name: 'Preston', favNintendoSeries: 'The Legend of Zelda'}
// ]

// let found = arr.find(el => {
//     return el.favNintendoSeries === 'Pokemon'
// })

// console.log(found)


//reduce

const array1 = [1, 2, 3, 4];

// using reduce to calculate a sum of numbers in an array

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => {
//     console.log('accum: ', accumulator, 'curr: ', currentValue)
//     return accumulator + currentValue
// }, 0);

// console.log(sumWithInitial);
// Expected output: 10

// using reduce to build an object

const initialValue = {}

const newObj = array1.reduce((accum, el) => {
    console.log('accum: ', accum, 'curr: ', el)
    let copy = {...accum}

    copy[el] = el

    return copy

}, initialValue)
