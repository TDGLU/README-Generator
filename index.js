const inquirer = require("inquirer");  

// const questions = [
//   {
//     type: "input",
//     message: "What is your GitHub username?",
//     name: "Username",
//   }
// ];

function init() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "what would you like your profile title to be?",
      name: "title"
    }
  ])
  .then((data) => {
    console.log("The user's title is " + data.title)
  })
  .catch((error) => {
    console.log(error)
  });
}

init();