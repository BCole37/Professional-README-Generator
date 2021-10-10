// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown  = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input 
const questions = [
    {
        type: "input",
        message: "What is your title of your project?",
        name: "Title"
      },
      {
        type: "input",
        message: "What is the Repository name?",
        name: "Repository"
      },
      {
        type: "input",
        message: "How would you describe your project?",
        name: "Description"
      },
      {
        type: "input",
        message: "installation instructions?",
        name: "Installation",
        default: "The user should run 'npm i' in the command line."
      },
      {
        type: "input",
        message: "How to use project?",
        name: "Usage",
        default: "After installation, the user should run 'node index.js' in the command line, then answer the following prompts."
      }, 
      {
        type: "input",
        message: "How to contribute to project?",
        name: "Contributing",
        default: "Clone locally then make changes and put them up for review on Github"
      },
      {
        type: "input",
        message: "Example Tests",
        name: "tests",
        default: "Update With Video Link"
      },   
      {
        type: "input",
        message: "Give your GitHub username so the user can submit questions.",
        name: "github"
      },
      {
        type: "input",
        message: "Give your email address so the user can submit questions.",
        name: "email"
      }
      
];
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {

        if (err) {
          return console.log(err);
        }

        console.log("Successfully Created!");
      
      });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("README.md", generateMarkdown(answers));
      })
}

// function call to initialize program
init();

