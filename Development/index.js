const inquirer = require("inquirer");

const saveData = [];


function callManager() {
  inquirer
    .prompt([
      {
        type: `input`,
        message: `What is your Managers name?`,
        name: `Manager`,
      },
      {
        type: `input`,
        message: `what is the managers ID#`,
        name: "managerId",
      },
      {
        type: `input`,
        message: `what is the managers Email?`,
        name: "managerEmail",
      },
      {
        type: `input`,
        message: `what is the office number?`,
        name: `officeNum`,
      },
    ])
    .then((answers) => {
      console.log(answers.officeNum);
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
        name: "EngineerName",
      },
      {
        type: `input`,
        message: `what is their ID#?`,
        name: `EngId`,
      },
      {
        type: `input`,
        message: `what is their Email?`,
        name: `EngEmail`,
      },
      {
        type: `input`,
        message: `what is their github username?`,
        name: "EngGithub",
      },
    ])
    .then((answers) => {
      console.log(answers);
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
        name: "InternName",
      },
      {
        type: `input`,
        message: `what is the interns ID#?`,
        name: `InternID`,
      },
      {
        type: `input`,
        message: `what is the interns Email?`,
        name: `InternEmail`,
      },
      {
        Type: `input`,
        message: `what school does the intern attend?`,
        name: `InternSchool`,
      },
    ])
    .then((answers) => {
      console.log(answers);
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
      if(answers.employeesQuestion === 'Manager'){
        callManager();
      }
      if(answers.employeesQuestion === 'Engineer'){
        callEngineer();
      }
      if(answers.employeesQuestion === 'Intern'){
        callIntern();
      }
      if(answers.employeesQuestion === 'noone'){
        console.log(saveData);
      }

    });
}

callManager();
