// Exercise #3

function calculateAge(birthYear, currentYear) {
  currentYear = new Date().getFullYear();
  let result = `you are ${currentYear - birthYear} years old`;
  console.log(result);
}

calculateAge(2000);
calculateAge(1997);
calculateAge(1969);
