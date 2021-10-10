// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.Title}
  ##  Repository: 
  http://github.com/${data.github}/${data.Repository}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [tests](#tests)
     
  ## Description
    ${data.Description}

  ## Installation
    ${data.Installation}

  ## Usage
    ${data.Usage}

  ## Contributing
    ${data.Contributing}

  ## Tests
    ${data.tests}

  ## Questions
    If you have any questions reach out.
    Email: ${data.email}
    Github: [${data.github}] (http://github.com/${data.github})
  `;
  }
  
  module.exports = generateMarkdown;