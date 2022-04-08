(function () {
  function Employee(id) {
    this.id = id;
    this.name = "Default";
    this.employee = { name: "MUM" };
  }

  Employee.prototype.getName = function () {
    return this.name;
  };

  Employee.prototype.getEmployerName = function () {
    return this.employee.name;
  };

  const john = new Employee(98000);
})();
