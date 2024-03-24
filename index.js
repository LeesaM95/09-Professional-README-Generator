// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type:'input',
            name:'description',
            message:'Describe what your project can do specifically. Add context, links, and anything else you may deem important.'
        },
        {
            type:'input',
            name:'installation',
            message:'How would someone install your project?',

        },
        {
            type:'input',
            name:'usage',
            message:'Show the expected output of your project if you can. Add examples if possible.'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'How can a fellow programmer contribute to your project?'
        },
         {
            type:'list',
            name:'testing',
            message:'Does your project have a test script to run?',
            choices: ['Yes', 'No'],
            default: 'No'
        },

        {
            type:'checkbox',
            name:'license',
            message:'What license is being applied?',
            choices: ['MIT', 'GPlv3', 'Apache_2.0', 'BSD_2--Clause', 'BSD_3--Clause', 'Boost_1.0', 'CC0_1.0', 'EPL_1.0', 'AGPL_v3', 'GPL_v2', 'MPL_2.0', 'Unlicense', 'None']
        },
        {
            type:'input',
            name:'username',
            message:'What is your GitHub username?',
            default: 'LMarie95'

        },
        {
            type:'input',
            name:'repository',
            message:'What is the name of the repository?'
        },
        {
            type:'input',
            name:'email',
            message:'what is your email?'
        },
    ];   

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateReadMe(data), (err) =>
    err
    ? console.log(err)
    : console.log("Whoohoo! readme file generated!"))

}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then((answers) => {writeToFile(`./${answers.title}`, answers)})
}

// Function call to initialize app
init();

