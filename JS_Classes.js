para = document.querySelector("p");

class Car {
  constructor(brand) {
    this.carName = brand;
  }
}

myCar = new Car("Ford");
para.innerText = `My car is a ${myCar.carName}`;
