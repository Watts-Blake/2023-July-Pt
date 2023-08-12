# Advance Array Methods

## forEach [MDN Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

The forEach() method of Array instances executes a provided function once for each array element.

This method returns undefined

```
let arr = [1, 2, 3, 4]

arr.forEach((el) => console.log(el))
```


## map [MDN Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

This method returns a new array

```
let arr = [1, 2, 3, 4]

let mapped = arr.map((el) => el * 2)

console.log(arr)
console.log(mapped)
```

## filter [MDN Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

This method returns a shallow copy of a portion of the given array

```
let arr = [1, 2, 3, 4]

let filtered = arr.filter((el) => el % 2 === 0)

console.log(arr)
console.log(filtered)
```


## find [MDN Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

```
let arr = [
    {name: 'Edward', favNintendoSeries: 'Mario'}
    {name: 'Blake', favNintendoSeries: 'Pokemon'}
    {name: 'Caleb', favNintendoSeries: 'Caleb'}
]

let found = arr.find((el) => el.favNintendoSeries === 'Pokemon')

console.log(arr)
console.log(found)
```

## reduce [MDN Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

```
 const initialValue = 0;
 const sumWithInitial = array1.reduce((accumulator, currentValue) => {
     console.log('accum: ', accumulator, 'curr: ', currentValue)
     return accumulator + currentValue
 }, 0);

 console.log(sumWithInitial);
```
