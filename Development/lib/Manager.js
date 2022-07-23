class Manager {
  constructor(name, Id, email, officeNumber) {
    this.name = name;
    this.Id = Id;
    this.email = email;
    this.officeNumber = officeNumber;
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
  getofficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return `Manager`;
  }
}
