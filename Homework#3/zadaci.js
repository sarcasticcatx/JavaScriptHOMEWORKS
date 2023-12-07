// Exercise #3

function calculateAge(birthYear, currentYear) {
  currentYear = new Date().getFullYear();
  let result = `you are ${currentYear - birthYear} years old`;
  console.log(result);
}

calculateAge(2000);
calculateAge(1997);
calculateAge(1969);

// Homework #1
function differentTypes(userInput) {
  return typeof userInput;
}

let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
let neOdredena;

console.log(differentTypes("kk"));
console.log(differentTypes(person));
console.log(differentTypes(555));
console.log(differentTypes(true));
console.log(differentTypes(neOdredena));

// Homework #3

let pari = 10000;

function cashAtm() {
  let vadenjePari = prompt("Kolku sakate da izvadite?");
  if (vadenjePari > 10000) {
    alert("Not enough money");
    return;
  }
  alert(
    `Izvadeni se ${vadenjePari} denari i ostanuvaat ${
      pari - vadenjePari
    } denari.`
  );
}

cashAtm();

