# M2Wk4D4 Data Structures Sets

## [Learning Boost](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-10---data-structures/learning-boost---thursday) 5 Min

<br/>

## Sets [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#constructor)
Set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection. You can iterate through the elements of a set in insertion order. The insertion order corresponds to the order in which each element was inserted into the set by the add() method successfully (that is, there wasn't an identical element already in the set when add() was called).

The specification requires sets to be implemented "that, on average, provide access times that are sublinear on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).

### Set Methods
#### Constructor [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set)
```
const set = new Set([1, 2, 3, 4, 5, 5, 5]);

console.log(set);
console.log(set[0]);

for (let el of set) {
  console.log(el)
}
```

### Instance Methods [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#:~:text=prototype.toString().-,Instance%20methods,-Set.prototype.add)

```

const set = new Set([1, 2, 3, 4, 5, 5, 5]);

// add
//Inserts a new element with a specified value in to a Set object, if there isn't an element with the same value already in the Set.

console.log(set);
set.add(5)
console.log(set)

// has
// Returns a boolean asserting whether an element is present with the given value in the Set object or not.

const set = new Set([1, 2, 3, 4, 5, 5, 5]);

console.log(set.has(1));
console.log(set.has(7));


//delete
//Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not. Set.prototype.has(value) will return false afterwards.

const set = new Set([1, 2, 3, 4, 5, 5, 5]);

console.log(set);
console.log(set.delete(1));
console.log(set);

// clear
//The clear() method of Set instances removes all elements from this set.

const set = new Set([1, 2, 3, 4, 5, 5, 5]);

console.log(set);
console.log(set.clear());
console.log(set);

```

<br/>

### Paired Practice
- [Hash Table Implementations](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-10---data-structures/hash-table-implementations)
    - Q&A
<br/>

## [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-10---data-structures/formative-quiz---thursday--repeat-)

# EOD
