// "use restrict";
//Solution 1:
// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to login in`);
//   },
// };

// askPassword(
//   () => user.loginOk(),
//   () => user.loginFail()
// );


//solution 2
let group={
    title:"Our Group",
    students:["John","Pete","Alice"],

    showList:function(){
        // this.students.forEach(function(student){
        //     console.log(this.title+ ':'+student);
        // });
        this.students.forEach((student)=>{
            console.log(this.title+ ':'+student);
        });
    }
}
group.showList();