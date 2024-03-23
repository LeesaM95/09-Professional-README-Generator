// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown');
const license = ['MIT License', 'GNU License v3.0', 'Apache License 2.0', 'BSD 2-Clause License', 'BSD 3-Clause License', 'Boost Software License', 'Creative Commons v1.0', 'Eclipse Public', 'GNU Affero v3.0', 'GNU Lesser v2.1', 'Mozilla Public', 'The Unlicense License']

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
            type:'list',
            name:'installation',
            message:'What kind of program is your project?',
            choices: ['Website', 'NodeJs', 'Other']
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
            choices: license
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
function writeToFile(questions, data) {
    inquirer
    .prompt(questions)
    .then(answers => {
        answers.confirm === answers.password
        ? console.log('Writing in Process!')
        : console.log('Wrong Password.')

        console.log(answers)

        const readMeAnswers = generateReadMe(answers)

        fs.writeFile('README.md', readMeAnswers, function (err) {
            if (err)
            console.log('could not save');
            else
            console.log('File Created!')
            console.log('Page Created!')
        })
    })

}

// TODO: Create a function to initialize app
function init() {
    writeToFile(questions)
}

// Function call to initialize app
init();
