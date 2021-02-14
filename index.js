// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const licenses = ["Apache","MIT","Eclipse","Boost","IBM","GPL","BSD","Perl","Mozilla","No License"];

// TODO: Create an array of questions for user input
const questions = ["Enter project Title",
 "Enter project Description",
 "Choose license",
 ,"Enter Installation Instruction", 
 "Enter usage Information",
"Enter contribution Guidelines",
"Enter Test Instructions",
"Enter your GitHub Username",
"Enter Email Address"
];

const promptUser = () => {
    return inquirer.prompt([
        {
            type:"input",
            name:"title",
            message:questions[0]
        },
        {
            type:"input",
            name:"description",
            message:questions[1]
        },
        
        
        {
            type:"list",
            name:"license",
            message:questions[2],
            choices:licenses
        },
        {
            type:"input", 
            name:"installation",
            message:questions[4] // here installation question set as index 3, but now it takes as index 4
        },
        {
            type:"input",
            name:"usage",
            message:questions[5]
        },
        {
            type:"input",
            name:"guideline",
            message:questions[6]
        },
        {
            type:"input",
            name:"test",
            message:questions[7]
        },
        {
            type:"input",
            name:"github",
            message:questions[8]
        },
        {
            type:"input",
            name:"email",
            message:questions[9]
        }
    ]);
} 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if(err) console.log(err);
        console.log("successfully readme.md created");
    });  
}

// TODO: Create a function to initialize app
function init() {
    promptUser().then((answers)=>{
        writeToFile("README.md",generateMarkdown(answers));
    }).catch(
        (err)=>{
            console.log(err+" Something went wrong");
        }
    );
}

// Function call to initialize app
init();