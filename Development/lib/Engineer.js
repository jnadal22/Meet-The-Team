class Engineer {
  constructor(name, Id, email, GitHub) {
    this.name = name;
    this.Id = Id;
    this.email = email;
    this.GitHub = GitHub;
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
  getGitHub() {
    return this.GitHub;
  }
  getRole() {
    return `Engineer`;
  }
}
