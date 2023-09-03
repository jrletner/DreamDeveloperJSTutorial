// Task 1
let currentDate = new Date();

// Task 2
console.log(currentDate);

// Task 3
const hour = currentDate.getHours();
let min = currentDate.getMinutes();

if (min < 10) {
  min = "0" + min;
}
console.log(`${hour}:${min}`);

// Task 4
console.log(currentDate.toLocaleDateString("default", { weekday: "short" }));
