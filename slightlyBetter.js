class Player {
  constructor(name, hp, mp, item) {
    (this.name = name), (this.hp = hp), (this.mp = mp), (this.item = item);
  }

  speak(phrase) {
    console.log(`${this.name} says: ${phrase}`);
  }
}

const hanSolo = new Player("Han Solo", 100, 10, ["Blaster"]);
hanSolo.speak("Never tell me the odds!");
const darthVader = new Player("Darth Vader", 200, 50, ["Saber"]);
console.log(hanSolo);
console.log(darthVader);
