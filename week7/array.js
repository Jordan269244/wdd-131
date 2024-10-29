//  arrays.js
const steps = ["one", "two", "three"];

function listTemplate(step) {
  return `<li>${step}</li>`; 
}
const stepsHtml = steps.map(listTemplate)// use map to convert the list from strings to HTML

document.querySelector("#myList").innerHTML = stepsHtml.join(''); // set the innerHTML

const grades = ["A","B","A"];

function gradechange(grade) {
  if (grade == "A") return 4;
  if (grade == "B") return 3;
  return 0
}
//Activity 2


const gpaPoints = grades.map(gradechange);
console.log(gpaPoints);

//Activity 3

pointsTotal = gpaPoints.reduce((total, item) => total + item, 0);
 

gpa = pointsTotal /gpaPoints.length;
console.log(pointsTotal);

//Activity 4

const words = ["watermelon", "peach", "apple","tomato","grape"];
shortWords = words.filter((word) => word.length < 6);
console.log(shortWords);

//Activity 5

const numbers = ['12', '34', '21', '54'];
const luckyNumber = '21';
let luckyIndex = numbers.indexOf(luckyNumber);
console.log(`${luckyNumber} is found in the ${luckyIndex} position`);

