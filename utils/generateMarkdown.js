// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.toUpperCase() == "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license.toUpperCase() == "GPL") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else if (license.toUpperCase() == "APACHE") {
    return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
  } else if (license.toUpperCase() == "BOOST") {
    return "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg";
  } else if (license.toUpperCase() == "MOZILLA") {
    return "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
  } else if (license.toUpperCase() == "PERL") {
    return "https://img.shields.io/badge/License-Perl-0298c3.svg";
  } else if (license.toUpperCase() == "IBM") {
    return "https://img.shields.io/badge/License-IPL%201.0-blue.svg";
  } else if (license.toUpperCase() == "ECLIPSE") {
    return "https://img.shields.io/badge/License-EPL%201.0-red.svg";
  } else if (license.toUpperCase() == "BSD") {
    return "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.toUpperCase() == "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license.toUpperCase() == "GPL") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license.toUpperCase() == "APACHE") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license.toUpperCase() == "BOOST") {
    return "https://www.boost.org/LICENSE_1_0.txt";
  } else if (license.toUpperCase() == "MOZILLA") {
    return "https://opensource.org/licenses/MPL-2.0";
  } else if (license.toUpperCase() == "PERL") {
    return "https://opensource.org/licenses/Artistic-2.0";
  } else if (license.toUpperCase() == "IBM") {
    return "https://opensource.org/licenses/IPL-1.0";
  } else if (license.toUpperCase() == "ECLIPSE") {
    return "https://opensource.org/licenses/EPL-1.0";
  } else if (license.toUpperCase() == "BSD") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.toUpperCase() == "MIT") {
    return "MIT license";
  } else if (license.toUpperCase() == "GPL") {
    return "GPL license";
  } else if (license.toUpperCase() == "APACHE") {
    return "Apache 2.0 License";
  } else if (license.toUpperCase() == "BOOST") {
    return "Boost Software License 1.0";
  } else if (license.toUpperCase() == "MOZILLA") {
    return "Mozilla Public License 2.0";
  } else if (license.toUpperCase() == "PERL") {
    return "The Perl License";
  } else if (license.toUpperCase() == "IBM") {
    return "IBM Public License Version 1.0";
  } else if (license.toUpperCase() == "ECLIPSE") {
    return "Eclipse Public License 1.0";
  } else if (license.toUpperCase() == "BSD") {
    return "BSD 3-Clause License";
  } else {
    return "";
  }
}

// return the format to be displayed for readme file
function generateMarkdown(data) {
  return `
  # Title
  ${data.title}
  
  [![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
  
  ## Table of contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage Information](#usage-information)
  - [License](#license)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Procedure](#test-procedure)
  - [Questions](#questions)
  
  ## Description
     ${data.description}

  ## Installation
     ${(data.installation == "")?"N/A":data.installation}

  ## Usage Information
     ${(data.usage == "")?"N/A":data.usage}

  ## License
     ${(renderLicenseSection(data.license) == "")?"N/A":renderLicenseSection(data.license)}
  
  ## Contribution Guidelines
     ${(data.guideline == "")?"N/A":data.guideline}

  ## Test Procedure
     ${(data.test == "")?"N/A":data.test}

  ## Questions
    if you have questions then please feel free to contact on these addresses,
    Github:   [!${data.github}](https://github.com/${data.github})
    Email: ${data.email}
    `;
}

module.exports = generateMarkdown;
