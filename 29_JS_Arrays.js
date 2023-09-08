let supers = [
  "Superman",
  "Batman",
  "Flash",
  "Aquaman",
  ["good", "evil", "neutral"],
  12,
];

//supers[4] = "Wonder Woman";
//delete supers[2]; // still in the array just comes back as undefined

// console.log(supers);
// console.log(supers[4][2]);

// supers.forEach(function (value, index, array) {
//   console.log(`The index of ${value} is ${index}for the array ${array}`);
// });

// function upperCase(myValue) {
//   return myValue.toUpperCase();
// }

// let supersCap = supers.map(upperCase);
// console.log("New Array: ", supersCap);

myNumbers = [1, 2, 3, 50, 45, 32, 34, 90, 13, 100];
function double(x) {
  return x * 2;
}

function add(total, value, index, array) {
  return total + value;
}

let doubleN = myNumbers.map(double);
console.log(doubleN);

let evenNumbers = myNumbers.filter(function (value, index, array) {
  return value % 2 === 0;
});
console.log(evenNumbers);

let sum = myNumbers.reduce(add);
console.log(sum);
