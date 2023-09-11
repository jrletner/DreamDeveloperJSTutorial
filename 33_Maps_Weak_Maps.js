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
