// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = "";

    if(!license) {
        badge = "https://img.shields.io/badge/License-MIT%20License-blue"
    }
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = "";

    if(licenseLink === 'MIT License'){
        licenseLink = "https://www.mit.edu/~amini/LICENSE.md"
    } else if (licenseLink === 'GNU License v3.0') {
        licenseLink = "https://www.gnu.org/licenses/gpl-3.0.txt";
    } else if (licenseLink === 'Apache License 2.0') {
        licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.txt"
    } else if (licenseLink === 'BSD 2-Clause License') {
        licenseLink = "https://opensource.org/license/bsd-2-clause";
    } else if (licenseLink === 'BSD 3-Clause License') {
        licenseLink = "https://opensource.org/license/bsd-3-clause"
    } else if (licenseLink === 'Boost Software License') {
        licenseLink = "https://www.boost.org/LICENSE_1_0.txt"
    } else if (licenseLink === 'Creative Commons v1.0') {
        licenseLink = "https://creativecommons.org/publicdomain/zero/1.0/legalcode.txt"
    } else if (licenseLink === 'Eclipse Public') {
        licenseLink = "https://www.eclipse.org/legal/epl-v10.html"
    } else if (licenseLink === 'GNU Affero v3.0') {
        licenseLink = "https://www.gnu.org/licenses/agpl-3.0.txt"
    } else if (licenseLink === 'GNU Lesser v2.1') {
        licenseLink = "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.txt"
    } else if (licenseLink === 'Mozilla Public') {
        licenseLink = "https://www.mozilla.org/en-US/MPL/2.0/"
    } else if (licenseLink === 'The Unlicense License') {
        licenseLink = "https://choosealicense.com/licenses/unlicense/"
    } else {
        licenseLink = "";
    }
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseText;

    if(!license) {
        licenseText = `This software/code is licensed under ${license}.
        To use this software/code, you must agree to follow and comply with license's Terms and Conditions.
        A copy of the license can be found at: ${renderLicenseLink(license)}`
    }
    else {
        licenseText = 'Unlicensed'
    }
    return licenseText
}


//I need to generate the installation guide

// I need to generate the Usage

// I need to generate the instructions

// I need to register the contributions




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License Badge](${renderLicenseBadge(answers.license)})

  ## Description
  ${data.description}

  ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
    - [License](#license)

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

 ## License
`;
}

module.exports = generateMarkdown;
