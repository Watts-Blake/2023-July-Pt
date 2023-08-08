# M1Wk3D2 Node, POJO, Advanced Arrays
<br/>

## Learning Boost 5 Min
<br/>

## Arrow Functions [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
Arrow functions, a.k.a. Fat Arrows (=>), are a more concise way of declaring functions. Arrow functions were introduced in ES2015 as a way of solving many of the inconveniences of the normal callback function syntax.

```
// function declaration
let average = function(num1, num2) {
  let avg = (num1 + num2) / 2;
  return avg;
};

// fat arrow function style!
let averageArrow = (num1, num2) => {
  let avg = (num1 + num2) / 2;
  return avg;
};

```

If there is only a single parameter you may omit the ( ) around the parameter declaration:
```
let arrow = param1 => {
  statement1;
  return value;
};
```
If you have no parameters with an arrow function you must still use the ( ):
```
let arrow = () => {
  statements;
  return value;
};
```
Arrow Functions allow for Implicit Returns

```
let arrow = () => 'hello'
console.log(arrow())
```
<br/>

## Objects [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

### Things to know about Objects
- Instead of accessing values within an object through an index with numbers, objects are indexed using keys. This means instant lookup time, and no iteration to find values
- Order is not guaranteed within an Object. When you iterate through the values in an object, they may not be in the same order as when they were entered.


Objects are defined by using curly braces: {}. See below for an example:

```
let obj = {}
console.log(obj)

let obj2 = new Object()
console.log(obj2)

```

### Keys && Values
Objects store their data with keys and values
- Keys are a named variable that will be used to key into that object in order to access a value
- Values are assigned to Keys and able to be accessed through their assigned key
- Values can hold any JS Data type
- You can create Keys and Value when creating and object
```
let person = {firstName: 'Blake', lastName: 'Watts', dog: 'paisley', age: 28, hobbies : ['coding', 'hiking', 'video games']}
console.log(person)
```
- or You can create keys and values after you have initialized your Object with Bracket Notation or Dot Notation
```
let person = {}
person.firstName = 'Blake'
person.lastName = 'Watts'
person['dog'] = 'Paisley'
person['age'] = 28
person['hobbies'] = ['coding', 'hiking', 'video games']

console.log(person)
```

### Dot Notation vs Bracket Notation
With Both of these forms of notation you can, Creat Key : Value, reassign a Keys Value or access a Value with a key.

[MDN Dot Notation Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#:~:text=bracket%20notation.-,Dot%20notation,-In%20the%20object)
- In the object.propertyName syntax, the propertyName must be a valid JavaScript identifier which can also be a reserved word. For example, object.$1 is valid, while object.1 is not.
```
let person = {}
console.log(person)

// create key value pair
person.firstName = 'Blake'
console.log(person)

// access a value with a key
console.log(person.firstName)

// reassign a value with a key
person.firstName = 'Edward'
console.log(person, person.firstName)

// create key value pair
person.hobbies = ['coding', 'hiking', 'video games']
console.log('full object :', person, 'keying into :', person.hobbies)

// mutating an array in an object
person.hobbies.push('watching anime')
console.log('full object :', person, 'keying into :', person.hobbies)

// what happens when trying to access the value of a key that doesnt exist
console.log(person.lastName)
```


[MDN Bracket Notation Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#:~:text=77.0%2C%20no%20ambiguity-,Bracket%20notation,-In%20the%20object)
- In the object[expression] syntax, the expression should evaluate to a string or Symbol that represents the property's name. So, it can be any string literal, for example, including '1foo', '!bar!', or even ' ' (a space).
```
let person = {}
console.log(person)

// create key value pair
person['firstName'] = 'Blake'
console.log(person)

// access a value with a key
console.log(person['firstName'])

// reassign a value with a key
person['firstName'] = 'Edward'
console.log(person, person['firstName'])

// what happens when trying to access the value of a key that doesnt exist
console.log(person['lastName'])
```

### Things to watch out for with Bracket Notation
- When using bracket notation we need to make sure what ever we are using to key into our object is evaluated to the correct thing
- If we do not include quotations inside of bracket notation then it will look for a variable in our code by the name, evaluate what that variable is, then key into our object with that evaluation

```
// this will not work because firstName in our bracket notation isnt surrounded by quotations, and will look for a variable names firstName
let person = {}
person[firstName] = 'Blake'
console.log(person)

// this will work because the firstName variable now exists
let firstName = 'firstName'
let person = {}
person[firstName] = 'Blake'
console.log(person)

// with using quotations
let person = {}
person['firstName'] = 'Blake'
console.log(person)
```

<br/>


# Short Practices 25 mins
- [Object Notation Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/object-notation-quiz)
- [Cat Builder](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/cat-builder)
- [Array of Objects](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/array-of-objects)
    - Short Practice Q&A 15 min

<br/>

## Iterating Through Objects
- We can use special syntax to iterate through each key of an object (in arbitrary order). This is super useful for looping through both the keys and values of an object.
- We will do his using a new kind of For loop

```
let obj = { name: "Rose", cats: 2 };

// The key we are accessing is assigned to the `currentKey`
// *variable* on each iteration.
for (let currentKey in obj) {
  console.log(currentKey);
}


// with our person object
let person = {firstName: 'Blake', lastName: 'Watts', dog: 'paisley', age: 28, hobbies : ['coding', 'hiking', 'video games']}

// The key we are accessing is assigned to the `key`
// *variable* on each iteration.
for (let key in person) {
  console.log('key name :', key);
  console.log('value at that key :', person[key])
}
```
### Methods vs Functions
Before we dive further into iterating with Objects, we'll take a moment to talk about methods. A method is essentially a function that belongs to an object. That means that every method is a function, but not every function is a method.
- myFunc() is a function
- myObject.myFunc() is a method of the object myObject
- myObject["myFunc"]() is a method of the object myObject

Same goes for any method you have used on MDN up until today, the reason we are using a period that a name is because we are using dot notation to key into that object and use a method that has been assigned to it.
- Methods are essentially functions that have been assigned to objects.

### Useful Object Methods
- Object.keys() [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- Object.values() [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- Object.entries() [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)


<br/>


# Short Practices Until EOD
- [Iterate Through Obj](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/iterate-through-obj)
- [Using Object.keys 1](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/using-object-keys-i)
- [Using Object.keys 2](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/using-object-keys-ii)
- [Using Object.values](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/using-object-values)
- [Using Object.entries](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/using-object-entries)
- [Writing Object Methods](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/writing-object-methods)
- [Refactoring Iteration](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/refactoring-iteration)

    - Short Practice Q&A 15 min
<br/>

## Start on Hmwk Until EOD!!!!


# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/formative-quiz---tuesday--repeat-) - 10 minutes

# EOD
