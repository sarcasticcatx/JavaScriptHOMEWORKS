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

