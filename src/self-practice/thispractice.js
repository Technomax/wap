let Animal = {
  type: "Carnivorous",
  //here this will refer to surrounding context as arrow is define in inner function
  getType: function () {
    return () => {
      console.log(this);
    };
  },
  //this will refer the surrounding context and arrow is preferred in function not in method
  getType2: () => {
    console.log(this);
  },
  //this will return Animal context and calling object before dot is Animal
  getType3: function () {
    console.log(this);
  },
};
Animal.getType();
Animal.getType2();
Animal.getType3();
