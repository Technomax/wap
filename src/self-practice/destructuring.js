//Destructuring of object, is all object properties
var expense = {
  type: "Business",
  amount: "$45 USD",
};
//ES6
const { type, amount } = expense;
const { type: a, amount: b } = expense;
const { type: x } = expense.type; //this is allowed by x is considered as unassigned variable
//Destructuring of argument objects
var saveFiled = {
  extension: "jpg",
  name: "repost",
  size: 14040,
};
function fileSummary({ name, extension, size }, { color }) {
  return `${color} The file ${name}.${extension} is of size ${size}`;
}
console.log(fileSummary(saveFiled, { color: "red" }));
//Destructuring of array is all about array elements
const companies = ["Google", "Facebook", "Uber"];
const [name1, name2, name3, name4] = companies;
//const [name]=companies; //accessing the first element of the array
console.log(name1);
console.log(name4);
////////////////////////////////
//To destructure element we use [] brackets while to destructure properties we use {} brackets
const { length } = companies;
console.log(length);
//using spread operator with array
const [e, ...f] = companies; //note rest element should be at the last
//mixing destructuring array and object
const techCompanies = [
  { name: "Google", location: "Mountain View" },
  { name: "Facebook", location: "Menlo Park" },
  { name: "Uber", location: "San Francisco" },
];
const [{ location }] = techCompanies;
console.log(location);
const Google = {
  locations: ["Mountain View", "New Work", "London"],
};
//action first find location property then get the first element
const {
  locations: [locationA],
} = Google;

//Destructuring array of arrays to array of objects
const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];
//way 1
const resultPointsA = points.map((pair) => {
  const [x, y] = pair;
  return { x, y };
});
console.log(resultPointsA);
//way2
const resultPointsB = points.map(([x, y]) => {
  return { x, y };
});
console.log(resultPointsB);
//------------------------------------------
const res = points.map(([x, y]) => {
  x, y;
});
console.log(res); //return [ undefined, undefined, undefined ]
//Excercise
const profile = {
  title: "Engineer",
  department: "Engineering",
};
//Bring this function down to single line using destructure principal
function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === "Engineer" && department === "Engineering";
}
//solution
function isEngineer({ title, department }) {
  return title === "Engineer" && department === "Engineering";
}
console.log(isEngineer(profile));
//convert array of arrays to array of objects
const classes = [
  ["Chemistry", "9AM", "Mr. Darnick"],
  ["Physics", "10:15AM", "Mrs. Lithun"],
  ["Math", "11:30AM", "Mrs. Vitalis"],
];
//solution
const classesAsObject = classes.map(([subject, time, teacher]) => {
  return { subject, time, teacher };
});
console.log(classesAsObject);
//recursion with destructuring, get result as array with square element
const numbers = [1, 2, 3];
function double([a, ...more],newArray = []) {
  while (more.length == 0) return newArray.push(a * 2);
  newArray.push(a * 2);
  double(more,newArray);
  return newArray;
}
console.log(double(numbers));
