Home of the work 1

const paragraphsElement = document.getElementsByClassName("paragraph")[0];
console.log(paragraphsElement.textContent);
console.log(paragraphsElement.innerText);

paragraphsElement.innerText = "this is kinda funny but";

const paragraphSecondElement = document.getElementsByClassName("second")[0];
console.log(paragraphSecondElement.textContent);
console.log(paragraphSecondElement.innerText);

paragraphSecondElement.innerText = "i am lowkey using ur code to write this";

const mainHeadingOne = document.getElementById("mainHeading");
console.log(mainHeadingOne);

mainHeadingOne.innerText = "no im not copying ur code, i do write it myself ";

const secondHOne = document.getElementsByTagName("h1")[1];
console.log(secondHOne);
console.log(secondHOne.textContent);
console.log(secondHOne.innerText);

secondHOne.innerText = "i dont copy paste is what im sayin";

const headerThree = document.getElementsByTagName("h3")[0];
console.log(headerThree);

headerThree.innerText =
  " sakas da mi kazhes deka samo innertext trebashe da staam za da raboti ...";

Home of the work 2

console.log("what if computers were smarter, what then?");

let list = document.getElementById("pain");
let broevi = [2, 5, 9, 30];
console.log(broevi);
//appendchild gi vrzuva elementite so nivniot parent ja taka go svativ
//poso ne mi dava innerhtml mi vika syntax error go najdov toa appendchild
let li2 = document.createElement("li");
li2.textContent = broevi;
list.appendChild(li2);

function sumOfNumbs(broevi) {
  let result = 0;
  for (i = 0; i < broevi.length; i++) result = result + broevi[i];
  return result;
};

console.log(sumOfNumbs(broevi)); // output 46

let result = sumOfNumbs(broevi);
let li3 = document.createElement("li");
li3.textContent = `the sum is: ${result}`;
list.appendChild(li3);

let li4 = document.createElement("li");
li4.textContent = "2 + 5 + 9 + 30 = " + (2 + 5 + 9 + 30);
list.appendChild(li4);
