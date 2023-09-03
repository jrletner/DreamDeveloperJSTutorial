let game; // undefined
let game2 = null; // null
let game3 = "Sonic"; // string

console.log(game ?? game2 ?? game3 ?? "Guest");

/*

Using || will return the first truthy value.

Using ?? will return the first defined value.

*/

let score = 0; // falsy

// if score is 0, then it won't display, because 0 is falsy
console.log(score || "no score registered");

// score of 0 now prints, because ?? returns the first defined value
console.log(score ?? "no score registered");

hello = () => "Hello, World";

console.log(hello());
