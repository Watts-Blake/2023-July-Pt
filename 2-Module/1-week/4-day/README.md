# M2Wk1D4 OOP

## [Learning Boost](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-7---oop/learning-boost---thursday) 5 Min

## What is OOP?
Object-Oriented Programming (often written as OOP) is a common design pattern that helps developers break down large, complex problems into simpler pieces. Implementation details of a single feature are bundled into a single API that interacts with other APIs of different features.

<br/>

### Encapsulation
The dictionary definition of encapsulate is "to enclose (something) in or as if in a capsule". Encapsulation in OOP means to put behavior and data together behind an API that hides the implementation details. The code that uses the object doesn't need to know how it works to use it. The complexity is hidden inside of a "black box".

### Example
Lets say we wanted to implement OOP on a car

A car has multiple things related to it such as
- Make
- Model
- Color
- Doors

What we are used to so far is creating a POJO in js such as this

```
const lambo = {
  make : "lamborghini",
  model : "aventador",
  color : 'black',
  logInfo : () => console.log(`${lambo.make}, ${lambo.model}, ${lambo.color}`)
}

lambo.logInfo()
```

This is fine, and will work for us, but we would have to manually create a pojo for each new car we would like to make.

<br/>

### Classes [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
A class defines the attributes and behavior for an object type. Classes in JavaScript are defined using the class keyword, followed by the name of the class, and a set of curly braces.

- Some example of class object's that you have worked with so far are js arrays and objects, thats why when we use typeof on these data types it returns object.
- Now were going to show you how to create your own class objects

To create a Class Object you will need to use to class keyword followed with curly braces
- when creating a class the naming convention for classes will be Pascal case (starting with a capital letter and continuing with camelcase)

```
class Car {}

console.log(Car)
```

- to create an instance of this class you will have to use the key word of new follwed by the class name like so

```
class Car {

}
const lambo = new Car

console.log(lambo)
```
- note that our lambo is just an empty object right now with nothing inside of it

### Constructor [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
The constructor method is a special method of a class for creating and initializing an object instance of that class.
- this is what we will use to create our new instances of this class

```
class Car {
    constructor(){
        this.make = 'lambo'
    }
}
const lambo = new Car
console.log(lambo)
```
- but we can make our lives even easier and create specific instances using this contructor method

```
class Car {
    constructor(make, model, color){
        this.make = make;
      	this.model = model;
      	this.color = color;

    }
}
const lambo = new Car
console.log(lambo)
// notice how we now have an object with all of our keys defined but we still have undefined values

// with our constructor we were able to make our class instance but we didnt toss it any arguments on creating

const lambo = new Car("lamborghini", "aventador", "black" )
console.log(lambo)

const bugatti = new Car("bugatti", "chiron", "silver")
console.log(bugatti)

// Also note that these are indeed objects still
console.log(typeof lambo)
console.log(typeof bugatti)
```

#### InstanceOf [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with

```
class Car {
    constructor(make, model, color){
        this.make = make;
      	this.model = model;
      	this.color = color;

    }
}

const lambo = new Car("lamborghini", "aventador", "black" )
console.log(lambo instanceof Car)
console.log(lambo instanceof Object)
console.log(lambo instanceof Array)
```
<br/>

### Instance Methods
Instance methods, as the name suggests, are invoked on an instance of the class. Instance methods are useful for performing an action on a specific instance. Most of the time, when developers speak of methods without any qualifier, they are referring to instance methods.

```
class Car {
    constructor(make, model, color){
        this.make = make;
      	this.model = model;
      	this.color = color;

    }
  logInfo() {
  console.log(`${this.make}, ${this.model}, ${this.color}`)
  }
}

const lambo = new Car("lamborghini", "aventador", "black" )

lambo.logInfo()

```

### Static Methods [MDN Docs]
The static keyword defines a static method or field for a class, or a static initialization block (see the link for more information about this usage). Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

```
class Car {
  	static allCars = []

    constructor(make, model, color){
        this.make = make;
      	this.model = model;
      	this.color = color;
      	Car.allCars.push(this);
    }
  logInfo() {
  console.log(`${this.make}, ${this.model}, ${this.color}`)
  }

  static printAllInstances() {
  	for (let car of Car.allCars) {
    	console.log(car)
    }
  }
}

const lambo = new Car("lamborghini", "aventador", "black" )
const bugatti = new Car("bugatti", "chiron", "silver")

console.log(Car.allCars)
Car.printAllInstances()
```
<br/>



### Inheritance
The dictionary definition of inheritance is "derived from one's ancestors". In the same way that biology passes traits of a parent organism to its descendants, so does object-oriented programming through its support of inheritance.

- Using inheritance with class object is simple
- we can use the extend key word to make a child class object of one previously made [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)


```
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }

  static pet(animal) {
    console.log(`You attempt to pet ${animal.name}`);
  }
}

class Dog extends Animal {
  // constructor inherited from Animal so no need to define one here
}

const fluffy = new Dog('Fluffy', 'woof');
fluffy.speak(); // woof
Dog.pet(fluffy); // You attempt to pet Fluffy
```

#### Super [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
The super keyword is used to access properties on an object literal or class's \[\[Prototype\]\], or invoke a superclass's constructor.

```
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }

  static pet(animal) {
    console.log(`You attempt to pet ${animal.name}`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, 'woof');
  }
}

const fluffy = new Dog('Fluffy');
fluffy.speak(); // woof
Dog.pet(fluffy); // You attempt to pet Fluffy
```

<br/>


## Paired Practice Until EOD
[Manager and Employee Salaries](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-7---oop/long-practice--manager-and-employee-salaries)


<br/>


# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-7---oop/formative-quiz---wednesday--repeat-) - 10 minutes


# EOD
