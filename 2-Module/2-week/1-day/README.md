# M2Wk2D1 Context TDD

## [Learning Boost](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-8---context-and-tdd/learning-boost---monday) 5 Min

<br/>

## Context [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
Context refers to the value of the this keyword when code is executed.

```
const test = {
  prop: 42,
  func: function () {
    return this === test;
  },
};

console.log(test.func());

class Dog {
  test() {
    return this === dog;
  }
}
let dog = new Dog();

console.log(dog.test());
```

```
class Dog {
  constructor(name) {
    this.name = name;
  }

  changeName() {
    this.name = "Layla";
  }
}

let dog = new Dog("Bowser");

// Note this is **not invoked** - you are assigning the function itself
let change = dog.changeName;
console.log(change()); // TypeError, due to not recognizing a valid context

// Your dog still has the same name!
console.log(dog);

let change = () => dog.changeName();
console.log(change());
console.log(dog);
```


```
class Cat {
  purr() {
    console.log("meow");
  }

  purrMore() {
    this.purr();
  }
}
let cat = new Cat();

global.setTimeout(cat.purrMore, 5000);
global.setTimeout(() => cat.purrMore(), 5000);
```

### bind() [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.

```
class Cat {
  purr() {
    console.log("meow");
  }

  purrMore() {
    this.purr();
  }
}
let cat = new Cat();

global.setTimeout(cat.purrMore, 5000);
global.setTimeout(() => cat.purrMore(), 5000);

const unboundPurrMore = cat.purrMore;

const boundPurrMore = unboundPurrMore.bind(cat);
global.setTimeout(boundPurrMore, 5000);
```

## Paired Practice Until EOD
[Context Project](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-8---context-and-tdd/context-project--phase-1-3)


<br/>

# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-8---context-and-tdd/formative-quiz---monday) - 10 minutes


# EOD
