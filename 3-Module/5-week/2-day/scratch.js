// const fs = require('fs');
import Wallet from './mani.js';
import functionObject from './mani.js';
import {func1, func2, function23} from './mani.js'
import * as functions from './mani.js'; 

export default class Wallet {
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

// module.exports = {Wallet, sayHello, sayHi}
// export default {
//   Wallet, sayHello, sayHi
// }