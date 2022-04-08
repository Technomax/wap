//Solution 8_2
"use restrict";
class Student {
  //answer: hold quiz correct answer or student's answer
  constructor(studentId, answers = []) {
    this.studentId = studentId;
    this.answers = answers;
  }

  addAnswer(question) {
    this.answers.push(question);
  }
}

class Question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }

  //used to check if student's answer is correct
  checkAnswer(correctAnswer) {
    return correctAnswer.answer === this.answers;
  }
}

class Quiz {
  //questions: It's a Map which holds question id and correct answers
  //students: an array holds all students
  constructor(questions = [], students = []) {
    this.question = questions;
    this.students = students;
  }

  //computes the quiz score for this student
  scoreStudentBySid(sid) {
    let ans = 0;
    this.students
      .find((x) => x.studentId === sid)
      .answers.forEach((x) => {
        this.question.forEach((y) => {
          if (y.question === x.question && y.answer === x.answer) {
            ans++;
          }
        });
      });
      return ans;
  }

  // computes the average score over all students
  getAverageScore() {
    let sum=0;
    this.students.forEach(x=>{
      sum+=this.scoreStudentBySid(x.studentId)
    });

    return sum/this.students.length;
  }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, "a"));
student1.addAnswer(new Question(3, "b"));
student1.addAnswer(new Question(1, "b"));

const student2 = new Student(11);
student2.addAnswer(new Question(3, "b"));
student2.addAnswer(new Question(2, "a"));
student2.addAnswer(new Question(1, "d"));

const students = [student1, student2];

const questions = [
  new Question(1, "b"),
  new Question(2, "a"),
  new Question(3, "b"),
];

const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10);

let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); 

let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5