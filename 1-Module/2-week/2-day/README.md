# M1Wk2D2 Intermediate Functions
<br/>

## Learning Boost 5 Min
<br/>

## Splice, Split, and Join

### Array.splice [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
```
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

```

<br/>

### String.split [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

```
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
```

<br/>

### Array.join [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

```
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

```
<br/>

# Short Practices 45 mins
- [Rotate Right](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/rotate-right)
- [AVG Value](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/avg-val)
- [My Index Of Recall](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/my-index-of-recall)
- [Tripler](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/tripler)
    - Short Practice Q&A 15 min

<br/>


# Short Practices 30 mins
- [Long Words](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/long-words)
- [Remove E Words](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/remove-e-words)
- [Max Value](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/max-value)
    - Short Practice Q&A 15 min

<br/>


# Short Practices 30 mins
- [Two Sum Recall](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/two-sum-recall)
- [Reverse Sentence](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/reverse-sentence)
- [Initials](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/initials)
    - Short Practice Q&A 15 min
<br/>

## Start on Hmwk Until EOD!!!!


# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-2---intermediate-functions/formative-quiz--repeat----tuesday) - 10 minutes

# EOD
