let roll = 3;

switch (roll) {
  case 1:
    console.log("You rolled a 1");
    break;
  case 2:
    console.log("You rolled a 2");
    break;
  default:
    console.log("You rolled higher than 1 and 2");
}

let today = new Date().toLocaleString("default", { weekday: "short" });

switch (false) {
  case today === "Sun":
    console.log(`Today is ${today}`);
    break;
  case today === "Mon":
    console.log("Today is Monday");
    break;
  case today === "Tue":
    console.log("Today is Tuesday");
    break;
  default:
    console.log(`Default Today is: ${today}`);
}
