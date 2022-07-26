const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const saveData = [];

const manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const employee = require("./lib/Employee");

function callManager() {
  inquirer
    .prompt([
      {
        type: `input`,
        message: `What is your Managers name?`,
        name: `Name`,
      },
      {
        type: `input`,
        message: `what is the managers ID#`,
        name: "Id",
      },
      {
        type: `input`,
        message: `what is the managers Email?`,
        name: "Email",
      },
      {
        type: `input`,
        message: `what is the office number?`,
        name: `officeNum`,
      },
    ])
    .then((answers) => {
      console.log(answers.officeNum);
      answers.title = "manager";
      saveData.push(answers);

      AnyOthers();
    });
}

function callEngineer() {
  inquirer
    .prompt([
      {
        type: `input`,
        message: `what is the Engineers name?`,
        name: "Name",
      },
      {
        type: `input`,
        message: `what is their ID#?`,
        name: `Id`,
      },
      {
        type: `input`,
        message: `what is their Email?`,
        name: `Email`,
      },
      {
        type: `input`,
        message: `what is their github username?`,
        name: "Github",
      },
    ])
    .then((answers) => {
      console.log(answers);
      answers.title = "Engineer";
      saveData.push(answers);

      AnyOthers();
    });
}

function callIntern() {
  inquirer
    .prompt([
      {
        type: `input`,
        message: `what is the interns name?`,
        name: "Name",
      },
      {
        type: `input`,
        message: `what is the interns ID#?`,
        name: `Id`,
      },
      {
        type: `input`,
        message: `what is the interns Email?`,
        name: `Email`,
      },
      {
        Type: `input`,
        message: `what school does the intern attend?`,
        name: `School`,
      },
    ])
    .then((answers) => {
      console.log(answers);
      answers.title = "intern";
      saveData.push(answers);

      AnyOthers();
    });
}

function AnyOthers() {
  inquirer
    .prompt([
      {
        type: `list`,
        message: `would you like to add more employees?`,
        name: `employeesQuestion`,
        choices: ["Manager", "Engineer", "Intern", "noone"],
      },
    ])
    .then((answers) => {
      console.log(answers);
      if (answers.employeesQuestion === "Manager") {
        callManager();
      }
      if (answers.employeesQuestion === "Engineer") {
        callEngineer();
      }
      if (answers.employeesQuestion === "Intern") {
        callIntern();
      }
      if (answers.employeesQuestion === "noone") {
        console.log(saveData);
        writeHtml(saveData);
      }
    });
}

callManager();

function writeHtml(information) {
  console.log(information, "info");
  let team = "";
  information.forEach((item) => {
    team += `<div class="card" style="width: 18rem">
    <div class="list-group list-group-flush">
      <h1 class="name">${item.Name}</h1>
      <h2 class="title">${item.title}</h2>
      <a class="id1">ID:${item.Id}</a>
      <href>Email:${item.Email}</href>
      ${item.GitHub ? `<href>GitHub:${item.Github}</href>` : ""}
      ${item.school ? `<li>school:${item.school}</li>` : ""}
      ${item.officeNum ? `<li>office#:${item.officeNum}</li>` : ""}
      
    
    </div>`;
  });

  let html = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./assets/style.css" />
      <title>Meet The Team</title>
      <!-- <link rel="stylesheet" href="jass.css" /> -->
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
        <div class="header">
          <h1 class="display-4">Meet The Team</h1>
        </div>
      </div>
      ${team}
    </body>
  
    <script src="index.js"></script>`;

  fs.writeFile(__dirname + "/../public/index.html", html, (err) => {
    if (err) {
      console.error(err, "HTMl not generated");
      return;
    }
    console.log("HTML succesfully written");
    // file written successfully
  });
}
