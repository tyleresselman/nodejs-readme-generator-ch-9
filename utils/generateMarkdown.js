// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'The MIT License') {
    return "https://img.shields.io/badge/License-MIT-yellow.svg"
  } else if (license === 'Apache 2.0') {
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
  } else if (license === 'GNU GPL v3.0') {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg"
  } else if (license === 'BSD License') {
    return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
  } else if (license === 'N/A') {
    return ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'The MIT License') {
    return "https://opensource.org/licenses/MIT"
  } else if (license === 'Apache 2.0') {
    return "https://www.apache.org/licenses/LICENSE-2.0"
  } else if (license === 'GNU GPL v3.0') {
    return "https://www.gnu.org/licenses/gpl-3.0.en.html"
  } else if (license === 'BSD License') {
    return "https://opensource.org/licenses/BSD-3-Clause"
  } else {
    return ""
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "N/A") {
    return ""
  } else {
    return `I used ${license} as the license for this project. Please follow this link if you want to learn more: ${renderLicenseLink(license)}`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![License Badge](${renderLicenseBadge(data.license)})

  # ${data.title}

  ## Description: 
  ${data.description}

  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [Questions](#questions)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Testing
  ${data.testing}

  ## Questions
  Feel free to check out my GitHub page at: 
   https://github.com/${data.github}

  And you can contact me directly via email at the following address: 
   [${data.email}](mailto:${data.email})

  ## License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
