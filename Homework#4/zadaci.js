Homework #1
//i need to re-do them poso ima stvari sho ne sme gi uchele 

function tellStory(stories) {
  let [ime, mood, activity] = stories;
  return `This is ${ime}. ${ime} is a nice person. Today they are
${mood}. They are ${activity} all day. The end.`;
}
let stories = ["Elka", "happy", "playing The Witcher 3 - Wild Hunt"];
let story = tellStory(stories);
console.log(story);
//alert(story);
// poradi nekoja prichina koga kje pisham name avtomatski mi go preshkrtuva

Homework #2

function arrayOfFive(broevi) {
  let sum = 0;
  for (let number of broevi) {
    sum += number;
  }
  return sum;
}

let noombers = [10, 20, 30, 40, 50];
let sum = arrayOfFive(noombers);
console.log(sum);

Homework #3

function oneBigString(sentence) {
  let oneWholeSentence = sentence.join(" "); //The .join() method in JavaScript is used to join all elements of an array into a string.
  return oneWholeSentence;
}

let sentence = ["Hello", "there", "studennts", "of ", "Sedc", "!"];
console.log(oneBigString(sentence));

Homework #4

for (let i = 1; i <= 20; i++) {
  console.log(i);
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

Homework #5
//The ... operator in JavaScript is known as the spread operator. It allows an iterable (like an array or string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
function sumOfMaxAndMin(nums) {
  let maxNums = Math.max(...nums);
  console.log(maxNums);
  let minNums = Math.min(...nums);
  console.log(minNums);
  return maxNums + minNums;
}

let cool = [7, 9, 12, 50];
console.log(sumOfMaxAndMin(cool));

Homework #6 
//The .map() method in JavaScript is used to create a new array by applying a function to every element in an existing array. 
function getFullNames(firstNames, lastNames) {
  return firstNames.map(
    (firstName, i) => `${i + 1}. ${firstName} ${lastNames[i]}`
  );
}

let firstNames = ["Bob", "Jill"];
let lastNames = ["Gregory", "Wurtz"];

console.log(getFullNames(firstNames, lastNames));
