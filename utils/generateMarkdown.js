
// I need to generate the test
function renderTest(data) {
    let testingInfo = 'No test was written for this project.'
    let testingAnswer = data.testing
    if(testingAnswer === 'Yes'){
        testingInfo = `Running the software is super easy. All you'll have to do is open the terminal in your preferred coding app,
        and while making sure you're in the correct folder, run \u0060\u0060npm install\u0060\u0060 to
        allow the packages to download, then run \u0060\u0060npm run test\u0060\u0060 to run the program in your terminal.
        
        This test can be found under \u0060https://github.com/${answers.username}/${answers.repository}\u0060`
    }
    return testingInfo;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    var testRender = renderTest(data.testing)


  return `# ${data.title}
  
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)](https://opensource.org/licenses/${data.license})\n\n

  ## Description
  ${data.description}

  ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
    - [License](#${data.license})
    - [Support](#support)

 ## Installation
    ***
    The installation guide is as follows:
    ${data.installation}
    

 ## Usage
    ***
    ${data.usage}

## Contributing
    ***
    ${data.contributions}

 ## Testing
    ***
    ${testRender}

 ## License
    ***
    This software/code is licensed under ${data.license}. 
    To use this software/code, you must agree to follow and comply with license's Terms and Conditions.

 ## Support
 If you have any questions at all about how this program runs, or if something breaks, please don't hesitate to reach me
  either at ${data.email}, or private message me here on GitHub @${data.username}.
`;
}

module.exports = generateMarkdown;
