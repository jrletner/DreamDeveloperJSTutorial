const characters = ["Sonic", "Tails", "Mario", "Luigi"];

let para = document.querySelector("p");
let info = "The characters are: ";

for (let i = 0; i < characters.length; i++) {
  if (i === characters.length - 1) {
    info += `and ${characters[i]}.`;
  } else {
    info += `${characters[i]}, `;
  }
}

para.innerText = info;
