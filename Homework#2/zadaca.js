console.log("am i working?");
let userInput = prompt("What year are you born?");
console.log(typeof userInput);

let year = Number(userInput);

console.log(typeof year);

let formula = (year - 4) % 5;
console.log(formula);

if (formula === 0) {
  alert("You are a rat");
} else if (formula === 1) {
  alert("You are a ox");
} else if (formula === 2) {
  alert("You are a tiger");
} else if (formula === 3) {
  alert("You are a rabbit");
} else if (formula === 4) {
  alert("You are a dragon");
} else if (formula === 5) {
  alert("You are a snake");
} else if (formula === 6) {
  alert("You are a horse");
} else if (formula === 7) {
  alert("You are a goat");
} else if (formula === 8) {
  alert("You are a monkey");
} else if (formula === 9) {
  alert("You are a rooster");
} else if (formula === 10) {
  alert("You are a dog");
} else if (formula === 11) {
  alert("You are a pig");
}
