# M2Wk3D4 Number Bases && Arrays && Stacks

## [Learning Boost](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-9---big-o/learning-boost---thursday) 5 Min

<br/>

## Binary

### Base-10 : Decimal
Base-10 refers to how many digits there are in the counting system: 0-9 in this case.
```
00
01
02
03
04
05
06
07
08
09
10
11
12
```

### Base-2 (Binary)
Binary is another word for base-2. In this base, there are only two digits: 0 and 1.
Binary numbers are prepended with an 0b to differentiate them as binary.

```
0000 (0)
0001 (1)
0010 (2)
0011 (3)
0100 (4)
0101 (5)
0110 (6)
0111 (7)
1000 (8)
```
#### Converting Binary to Decimal
When converting Binary to Decimal, we need to take a look at each of our binary numbers.

Depending on the position we will use 2 to the power of its position in our number and multiply it by the number in its position starting at the end

After doing this for all our numbers we will add them together

```
// lets try converting Binary to Decimal

0b1100111010
2^0 * 0 = 1 * 0 = 0
2^1 * 1 = 2 * 1 = 2
2^2 * 0 = 4 * 0 = 0
2^3 * 1 = 8 * 0 = 8
2^4 * 1 = 16 * 1 = 16
2^5 * 1 = 32 * 1 = 32
2^6 * 9 = 64 * 0 = 0
2^7 * 0 = 128 * 0 = 0
2^8 * 1 = 256 * 1 = 256
2^9 * 1 = 512 * 1 = 512

2 + 8 + 16 + 32 + 256 + 512 = 826

// Decimal to Binary
// To do this we will need to divide our number by 2 and use the remainder to keep trak of our binary numbers


203

203/2 = 101 R1
101/2 = 50 R1
50/2 = 25 R0
25/2 = 12 R1
12/2 = 6 R0
6/2 = 3 R0
3/2 = 1 R1
1/2 = 0 R1

0b11001011

```

### Base-16 (Hexidecimal)
The digits are 0-9 with A, B, C, D, E, and F representing 10, 11, 12, 13, 14, and 15, respectively. Hexadecimal numbers (sometimes called 'hex' for short) are prepended with an 0x to differentiate them as base-16.

```
 0 = 0b0000 = 0x0
 1 = 0b0001 = 0x1
 2 = 0b0010 = 0x2
 3 = 0b0011 = 0x3
 4 = 0b0100 = 0x4
 5 = 0b0101 = 0x5
 6 = 0b0110 = 0x6
 7 = 0b0111 = 0x7
 8 = 0b1000 = 0x8
 9 = 0b1001 = 0x9
10 = 0b1010 = 0xA
11 = 0b1011 = 0xB
12 = 0b1100 = 0xC
13 = 0b1101 = 0xD
14 = 0b1110 = 0xE
15 = 0b1111 = 0xF
16 = 0b10000 = 0x10
```
#### Converting Hexidecimal
We can use the same way we used binary to do this, but instead of using 2 to the power of our numbers position we will now use 16


### Representing letters in binary (ASCII) [Docs](https://www.asciitable.com/)
To represent characters, each byte value is matched up with a character according to a standard encoding. The most common English standard is ASCII, which stands for "American Standard Code for Information Interchange".

<br/>

## Using Javascript Builtin Conversions
There are several built-in JavaScript conversion methods can be used for converting binary. Each one has its specific use cases.

### parseInt()[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

```
parseInt('a1', 16);  // 161
parseInt(`1011`, 2); // 11
```

### toString()[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
The toString() method of Number values returns a string representing this number value.

```
const decimal = parseInt('a1', 16); // 161
const hexadecimal = decimal.toString(16); // 'a1'
const binary = decimal.toString(2) // '10100001'
```

### String.fromCharCode()[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units (16-bit Unicode Transformation Format)

```
String.fromCharCode(65); // A;
String.fromCharCode(66); // B;
String.fromCharCode(67); // C;
```

### String.prototype.charCodeAt()[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)

```
const str = 'ABC';
const str = 'ABC';
str.charCodeAt(0); // 65
str.charCodeAt(1); // 66
str.charCodeAt(2); // 67
```

<br/>

## Short Practices 50 mins
- [Binary and Hexadecimal Practice](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-9---big-o/binary-and-hexadecimal-practice) 15 - mins

- [Advanced Conversion Functions](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-9---big-o/memory-practice) - 15 mins

- [Memory Practice](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-9---big-o/timing-benchmarks-practice-part-1) - 20 mins



<br/>

# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-9---big-o/formative-quiz---thursday--repeat-) - 10 minutes


# EOD
