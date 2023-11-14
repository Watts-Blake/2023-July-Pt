class Wallet {
  constructor() {
    this.value = 0;
  }
  addCredits(value) {
    this.value += value;
  }
  removeCredits(value) {
    this.value -= value;
  }
  showValue() {
    return this.value;
  }
}

function sayHello() {
  console.log('Hello!');
}

const sayHi = () => {
  console.log('Hi');
}