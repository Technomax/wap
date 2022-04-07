//Solution 8_2
"use restrict";
function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades=[];

  this.inputNewGrade = function (grade) {
    this.grades.push(grade);
  };

  this.computeAverageGrade = function () {
    return (
      this.grades.reduce((accum, grade) => accum + grade, 0) /
      this.grades.length
    );
  };
}

let studentA = new Student("Anil", "Maharjan");
studentA.inputNewGrade(98);
studentA.inputNewGrade(95);
studentA.inputNewGrade(100);

let studentB = new Student("Nisha", "Maharjan");
studentB.inputNewGrade(93);
studentB.inputNewGrade(95);
studentB.inputNewGrade(99);

let studentC = new Student("Aniya", "Maharjan");
studentC.inputNewGrade(94);
studentC.inputNewGrade(95);
studentC.inputNewGrade(97);

let students=[studentA,studentB,studentC]
console.log('--------overall average------------');
console.log((students.reduce((previous,current,index,array)=>previous+current.computeAverageGrade()/array.length,0)));
console.log('--------individual student average----------------');
let avgList=function(items){
  let arrays=[];
  items.forEach(item=>{
      arrays.push({firstName: item.firstName, lastName:item.lastName, computeAverageGrade:item.computeAverageGrade()});
  })
  return arrays;
}
console.log(avgList(students));
