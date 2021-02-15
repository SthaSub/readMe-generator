// TODO: Include packages needed for this application
const inquirer = require("inquirer"); // obj form inquirer package
const generateMarkdown = require("./utils/generateMarkdown"); // obj from generateMarkdown
const fs = require("fs"); // object from filysytem package

// predifened names of license stored in array
const licenses = ["Apache", "MIT", "Eclipse", "Boost", "IBM", "GPL", "BSD", "Perl", "Mozilla", "No License"];

// TODO: Create an array of questions for user input 
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter project Title"
    },
    {
        type: "input",
        name: "description",
        message: "Enter project Description"
    },
    {
        type: "list",
        name: "license",
        message: "Choose license",
        choices: licenses
    },
    {
        type: "input",
        name: "installation",
        message: "Enter Installation Instruction" // here installation question set as index 3, but now it takes as index 4
    },
    {
        type: "input",
        name: "usage",
        message: "Enter Usage Information"
    },
    {
        type: "input",
        name: "guideline",
        message: "Enter contribution Guidelines"
    },
    {
        type: "input",
        name: "test",
        message: "Enter Test Instructions"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Email Address"
    }
]

// prompt the questions on terminal 
const promptUser = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
// generates the file from given name and data
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) console.log(err);
        console.log("successfully readme.md created");
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser().then((answers) => {
        writeToFile("README.md", generateMarkdown(answers));
    }).catch(
        (err) => {
            console.log(err + " Something went wrong");
        }
    );
}

// Function call to initialize app
init();