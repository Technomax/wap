let student = {
  firstName: "",
  lastName: "",
  grades: [],
  inputNewGrade: function (grade) {
    this.grades.push(grade);
  },
  computeAverageGrade: function () {
    return (
      this.grades.reduce((accum, grade) => accum + grade, 0) /
      this.grades.length
    );
  },
};

let studentObject=[
    Object.create(student), 
    Object.create(student), 
    Object.create(student),
    Object.create(student),
    Object.create(student)
];
studentObject[0].inputNewGrade(95);
studentObject[1].inputNewGrade(95);
studentObject[2].inputNewGrade(95);
studentObject[3].inputNewGrade(95);
studentObject[4].inputNewGrade(95);