class Employee {
  constructor(name, Id, email) {
    this.name = name;
    this.Id = Id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.Id;
  }
  getemail() {
    return this.email;
  }
  getRole() {
    return `Employee`;
  }
}
