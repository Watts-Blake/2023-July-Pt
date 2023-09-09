class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak(arr, string) {
    console.log(`${this.name} goes ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
  speak(obj, string) {
    console.log(`the dog named ${this.name} goes ${this.sound}`);
  }
}

const paisley = new Dog("Paisley", "woof");
paisley.speak();
