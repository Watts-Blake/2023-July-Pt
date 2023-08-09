# M1Wk3D3 Node, POJO, Advanced Arrays
<br/>

## Learning Boost 5 Min
<br/>

## Checking for Keys in Obj
```
let person = {firstName: 'Blake', lastName: 'Watts', dog: 'paisley', age: 28, hobbies : ['coding', 'hiking', 'video games']}

let firstName = 'firstName'
// will return true but not without the variable above
console.log(firstName in person)
// will return true regardless of the variable above
console.log('firstName' in person)

// will return false
console.log('address' in person)

// will return undefined
console.log(person.address)

// remember undefined is a falsey value and will evaluate to false for boolean expressions
if (!person.address) {
console.log('undefined is a falsey value')
};
```

## Checking for Values in Obj

```
let person = {firstName: 'Blake', lastName: 'Watts', dog: 'paisley', age: 28, hobbies : ['coding', 'hiking', 'video games']}

// using Obj.values.includes
console.log(Object.values(person).includes('Blake'))

// using for in loop
const objValuesIncludes = (obj, value) => {

  for (let key in obj) {
  	if (obj[key] === value) {
    	return true
    };
    return false
  };
};

console.log(objValuesIncludes(person, 'Blake'))

```



<br/>


# Short Practices 20 Minutes
- [Frequency Counter](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/frequency-counter)
- [Nested array of objects](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/nested-array-of-objects)
    - Short Practice Q&A 15 min
<br/>

# Short Practices 25 Minutes
- [Nested objects](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/nested-objects)
- [Palindrome Permutation - Challenge](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/-palindrome-permutation---challenge)
    - Short Practice Q&A 15 min
<br/>

## Paired Project Practice until EOD
- [POJO Basics Project](https://github.com/appacademy/practice-for-week-02-pojo_basics)


# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-3---node--pojo--advanced-arrays/formative-quiz---wednesday--repeat-) - 10 minutes

# EOD
