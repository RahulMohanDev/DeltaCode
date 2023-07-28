const addAndSubtract = {
  num1: 6,
  num2: 3,
  add() {
    return this.num1 + this.num2;
  },
  subtract() {
    return this.num1 - this.num2;
  },
};

const calculator = {
  __proto__: addAndSubtract,
  product() {
    return this.num1 * this.num2;
  },
  divide() {
    return this.num1 / this.num2;
  },
};
