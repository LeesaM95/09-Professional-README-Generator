// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === 'MIT License'){
        license = "![License: MIT]https://www.mit.edu/~amini/LICENSE.md"
    } else if (license === 'GNU License v3.0') {
        license = "![License: GNU v3.0]https://www.gnu.org/licenses/gpl-3.0.txt";
    } else if (license === 'Apache License 2.0') {
        license = "![License: Apace v2.0]https://www.apache.org/licenses/LICENSE-2.0.txt"
    } else if (license === 'BSD 2-Clause License') {
        license = "![License: BSD 2-Clause]https://opensource.org/license/bsd-2-clause";
    } else if (license === 'BSD 3-Clause License') {
        license = "![License: BSD 3-Clause]https://opensource.org/license/bsd-3-clause"
    } else if (license === 'Boost Software License') {
        license = "![License: Boost Software]https://www.boost.org/LICENSE_1_0.txt"
    } else if (license === 'Creative Commons v1.0') {
        license = "![License: Creative Commons]https://creativecommons.org/publicdomain/zero/1.0/legalcode.txt"
    } else if (license === 'Eclipse Public') {
        license = "![License: Eclipse]https://www.eclipse.org/legal/epl-v10.html"
    } else if (license === 'GNU Affero v3.0') {
        license = "![License: GNU Affero]https://www.gnu.org/licenses/agpl-3.0.txt"
    } else if (license === 'GNU Lesser v2.1') {
        license = "![License: GNU Lesser]https://www.gnu.org/licenses/old-licenses/lgpl-2.1.txt"
    } else if (license === 'Mozilla Public') {
        license = "![License: Mozilla Public]https://www.mozilla.org/en-US/MPL/2.0/"
    } else if (license === 'The Unlicense License') {
        license = "![License: The Unlicense]https://choosealicense.com/licenses/unlicense/"
    } else {
        license = "";
    }
    return (license);
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseText;

    if(!license) {
        licenseText = `This software/code is licensed under ${license}.
        To use this software/code, you must agree to follow and comply with license's Terms and Conditions.
        A copy of the license can be found at: ${renderLicenseBadge(license)}`
    }
    else {
        licenseText = 'Unlicensed'
    }
    return (licenseText);
}


//I need to generate the installation guide
function renderInstall(answers) {
    if(answers.installation === 'Website') {
        let websiteInfo = `
        To install this link to your local computer, clone the repository using the SSH link
        under the drop down Code menu here: \u0060\u0060<a href="https://github.com/${answers.username}/${answers.repository}">Click Me!</a>\u0060\u0060
        
        Then double click on the \u0060\u0060index.html\u0060\u0060 file to open it with your browser of choice. 
        
        OR
        
        Follow the link provided to navigate to the GitHub Pages website available here: \u0060\u0060<a href="https://${answers.username}.github.io/${answers.repository}">Click Me!</a>`
        return websiteInfo;
    } else if (answers.installation === 'NodeJs') {
        let nodeInfo = `To install a Node project, you\u0060ll have to install [Node JS] on to your computer at (https://nodejs.org/).
        Once that's installed, clone the GitHub repository to your local computer. The repository can be found here: \u0060\u0060<a href="https://github.com/${answers.username}/${answers.repository}">Click Me!</a>\u0060\u0060
        `
        return (nodeInfo);
    } else {
        let otherInfo = `Clone the GitHub repository to your local computer via this link: \u0060\u0060<a href="https://github.com/${answers.username}/${answers.repository}">Click Me!</a>\u0060\u0060`
        return (otherInfo);
    }
    
}

// I need to generate the test
function renderTest(answers) {
    let testingInfo = 'No test was written for this project.'

    if(answers.Test === 'Yes'){
        testingInfo = `Running the software is super easy. All you'll have to do is open the terminal in your preferred coding app,
        and while making sure you're in the correct folder, run \u0060\u0060npm install\u0060\u0060 to
        allow the packages to download, then run \u0060\u0060npm run test\u0060\u0060 to run the program in your terminal.
        
        This test can be found under \u0060https://github.com/${answers.username}/${answers.repository}\u0060`
    }
    return testingInfo;
}


// I need to register the contributions
function renderContributions(answers) {
    let contribute = [answers.contributions];
    if(answers.contributionsCheck === 'Yes') {
        return contribute;
    } else {
        return [];
    }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License Badge](${renderLicenseBadge(license)})

  ## Description
  ${data.description}

  ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
    - [License](#license)
    - [Support](#support)

 ## Installation
    ***
    The installation guide is as follows:
    ${renderInstall(answers)}
    

 ## Usage
    ***
    ${data.usage}

## Contributing
    ***
    ${renderContributions(answers)}

 ## Testing
    ***
    ${renderTest(answers)}

 ## License
    ***
    This application is covered under the ${data.license}.
    ${renderLicenseSection(license)}

## Support
If you have any questions at all about how this program runs, or if something breaks, please don't hesitate to reach me
either at ${data.email}, or private message me here on GitHub @${data.username}
`;
}

module.exports = generateMarkdown;
