const inquirer = require("inquirer");  
const fs = require('fs')

const GenerateMD = require("./ReadmeLayout.js")

// These are the questions 
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
  // GitHub Username 
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "username"
  },
  // Email Address 
  {
    type: "input",
    message: "Enter your email address:",
    name: "email"
  },
];

function generateReadMe(layout) {
  fs.writeFile('Hello.md', layout, 'utf8', (err) => {
    if (err) {
      console.log(err)
    }
  })
}

function init() {
  inquirer
  .prompt(questions)
  .then((data) => {
    // console.log(data) 
    const layout = GenerateMD(data)
    console.log(layout)
    generateReadMe(layout)
  })
  .catch((error) => {
    console.log(error)
  });
}

init();