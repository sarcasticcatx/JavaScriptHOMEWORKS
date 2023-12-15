let userInput = prompt("What year are you born into");
let year = Number(userInput);
let formula = (year - 4) % 12;
switch (formula) {
  case 0:
    console.log("You are a rat");
    break;
  case 1:
    console.log("You are a ox");
    break;
  case 2:
    console.log("You are a tiger");
    break;
  case 3:
    console.log("You are a Rabbit");
    break;
  case 4:
    console.log("You are a dragon");
    break;
  case 5:
    console.log("You are a snake");
    break;
  case 6:
    console.log("You are a horse");
    break;
  case 7:
    console.log("You are a goat ");
    break;
  case 8:
    console.log("You are a monkey");
    break;
  case 9:
    console.log("You are a rooster");
    break;
  case 10:
    console.log("You are a dog ");
    break;
  case 11:
    console.log("You are a pig ");
    break;
}
