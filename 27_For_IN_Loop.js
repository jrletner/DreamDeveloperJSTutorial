// The For...In loop is designed to loop over an OBJECT's Properties

let character = {
  name: "Sonic",
  color: "Blue",
  speed: 1000,
};

for (name in character) {
  console.log(`${name}: ${character[name]}`);
}

const salaries = {
  Peter: 24000,
  James: 34000,
  John: 55000,
};

for (let i in salaries) {
  let salary = `$${salaries[i]}`;
  console.log(`${i} earns ${salary} or $${salaries[i]} per year`);
}

delete character.speed;
character.strength = "Strong";
console.log(character);
