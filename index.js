const inquirer = require("inquirer");  

const questions = [
  // Title
  {
    type: "input",
    message: "What would you like your project title to be?",
    name: "title"
  },
  // Description 
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description"
  },
  // Installations 
  {
    type: "input",
    message: "How could users install your project?",
    name: "installations"
  },
  // Usage 
  {
    type: "input",
    message: "How could users use your application?",
    name: "usage"
  },
  // contribution 
  {
    type: "input",
    message: "What are contribution rules for your project?",
    name: "contribution"
  },
  // Test 
  {
    type: "input",
    message: "How could users test your application?",
    name: "test"
  },
];

function init() {
  inquirer
  .prompt(questions)
  .then((data) => {
    // console.log("The user's title is " + data.title)
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  });
}

init();