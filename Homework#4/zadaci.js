Homework #1

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
