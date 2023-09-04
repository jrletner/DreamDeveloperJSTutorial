const characters = ["Sonic", "Tails", "Mario", "Luigi"];

para = document.querySelector("p");
let info = "The characters are: ";

for (let i = 0; i < characters.length; i++) {
  if (i === characters.length - 1) {
    info += `and ${characters[i]}.`;
  } else {
    info += `${characters[i]}, `;
  }
}

para.innerText = info;

const cars = ["Ford", "Chevy", "Dodge", "Toyota"];
let carData = "The cars are: ";

for (let [index, car] of cars.entries()) {
  if (index === characters.length - 1) {
    carData += `and ${car}.`;
  } else {
    carData += `${car}, `;
  }
  console.log(index);
}

para.innerText = carData;

// DO WHILE LOOP
// A DO WHILE LOOP HAS TO EXECUTE AT LEAST ONE TIME
let i = 0;

do {
  console.log(`The number is ${i}`);
  i++;
} while (i <= 10);
