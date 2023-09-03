let age = 18;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("Sorry, you can't vote");
}

let message = age >= 21 ? "You can vote" : "Sorry, you can't vote";

console.log(message);

let body = document.querySelector("body");
let choice = "dark";

choice === "dark" ? console.log("Dark") & body.classList.add("darkMode") : null;

console.log(body.classList);
