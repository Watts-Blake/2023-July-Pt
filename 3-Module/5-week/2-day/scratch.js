const fs = require('fs')
import fs from 'fs';

export class Wallet {
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

export function sayHello() {
  console.log('Hello!');
}

export const sayHi = () => {
  console.log('Hi');
}

module.exports = {Wallet, sayHello, sayHi}
export default {Wallet, sayHello, sayHi};