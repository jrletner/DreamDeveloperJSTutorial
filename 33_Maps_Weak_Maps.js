let gameMap = new Map();

gameMap.set("SEGA", "Sonic the Hedgehog");
gameMap.set("SNES", "Super Mario");
gameMap.set("PS", "Spyro");

for (let [myKey, myValue] of gameMap.entries()) {
  console.log(`${myKey} has the value of ${myValue}`);
}

for (x of gameMap) {
  console.log("x", x);
}

class Calculator {
  constructor(props) {
    this.result = 0;
  }

  add(num) {
    this.result += num;
    return this;
  }

  subtract(num) {
    this.result -= num;
    return this;
  }

  multiply(num) {
    this.result *= num;
    return this;
  }

  divide(num) {
    this.result /= num;
    return this;
  }
}

// Usage:
let calculator = new Calculator();
let calculator2 = new Calculator();

let expression1 = calculator.add(1).subtract(4);
let expression2 = calculator2.add(1).subtract(4).multiply(2).divide(10);

console.groupCollapsed("Builder Pattern");
console.log("result 1:", expression1.result);
console.log("result 2:", expression2.result);
console.groupEnd();
