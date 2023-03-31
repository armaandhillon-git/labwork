const math = require('mathjs');

class Calculator {
  constructor() {
    this.id = Math.floor(Math.random() * 1000000);
  }

  add(num1, num2) {
    const result = math.add(Number(num1), Number(num2));
    return { id: this.id, operation: 'add', num1, num2, result };
  }

  subtract(num1, num2) {
    const result = math.subtract(Number(num1), Number(num2));
    return { id: this.id, operation: 'subtract', num1, num2, result };
  }

  multiply(num1, num2) {
    const result = math.multiply(Number(num1), Number(num2));
    return { id: this.id, operation: 'multiply', num1, num2, result };
  }

  divide(num1, num2) {
    const result = math.divide(Number(num1), Number(num2));
    return { id: this.id, operation: 'divide', num1, num2, result };
  }

  exponentiate(num1, num2) {
    const result = math.pow(Number(num1), Number(num2));
    return { id: this.id, operation: 'exponentiate', num1, num2, result };
  }
}

module.exports = Calculator;
