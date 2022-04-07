//Solution 8_1
"use restrict";
//https://javascript.info/function-prototype
let student = {
  firstName:"",
  lastName:"",
  grades:[],
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


let studentA = Object.create(student);
studentA.inputNewGrade(98);
studentA.inputNewGrade(95);
studentA.inputNewGrade(100);

let studentB = Object.create(student);
studentB.inputNewGrade(93);
studentB.inputNewGrade(95);
studentB.inputNewGrade(99);

let studentC = Object.create(student);
studentC.inputNewGrade(94);
studentC.inputNewGrade(95);
studentC.inputNewGrade(97);

let students=[studentA,studentB,studentC]
console.log((students.reduce((previous,current,index, array)=>previous+current.computeAverageGrade()/array.length,0)));