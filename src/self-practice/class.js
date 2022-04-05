const students = [
  { name: "Quincy", grade: 96, courses: ["cs301", "cs303"] },
  { name: "Jason", grade: 84, courses: ["cs201", "cs203"] },
  { name: "Alexis", grade: 100, courses: ["cs105", "cs211"] },
  { name: "Sam", grade: 65, courses: ["cs445", "cs303"] },
  { name: "Katie", grade: 90, courses: ["cs303", "cs477"] },
];

console.log(
  students
    .filter((x) => x.courses.includes("cs303"))
    .map((x) => x.grade)
    .reduce((accum, number) => accum + number, 0) /
    students.filter((x) => x.courses.includes("cs303")).map((x) => x.grade)
      .length
);
