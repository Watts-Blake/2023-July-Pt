# M2Wk1D5 OOP

## [Learning Boost](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-7---oop/learning-boost---saturday) 5 Min

<br/>

## Ploymorphism [MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Polymorphism)
The dictionary definition of polymorphism is "having several shapes or forms" In object-oriented programming, polymorphism refers to processing various data types and classes through a single, uniform interface. The two most common types of polymorphism are "overloading" and "overriding".

### Overriding
Function overriding is when a child class gives its own - or a variation of - the implementation of a function from one of its ancestor classes (usually the parent).


```
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() {
    console.log(`${this.name} goes ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
  speak() {
    console.log(`the dog named ${this.name} goes ${this.sound}`);
  }
}

const paisley = new Dog("Paisley", "woof");
paisley.speak();
```

<br/>

### Overloading
Function overloading is a feature of object-oriented programming where two or more functions can have the same name but different parameters.

JavaScript does not support overloading. JavaScript supports overriding, so if you declare two functions with the same name, the last one defined will override the previously defined version

<br/>



## Paired Practice 4 hours
[Friendly Evil Dragons](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-7---oop/friendly-and-evil-dragons-phase-1-and-2)


<br/>

## Paired Practice Until EOD
[Adventure Project](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-7---oop/adventure-project--challenge---bonus-)

<br/>

# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-7---oop/formative-quiz---saturday) - 10 minutes


# EOD
