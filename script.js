const inquirer = require("inquirer");
const fs = require("fs");

const title = {
  type: "input",
  message: "What is the title of your project?",
  name: "title",
};
const description = {
  type: "input",
  message: "What is a description of your project?",
  name: "description",
};
const usage = {
  type: "input",
  message: "What will this be used for?",
  name: "usage",
};
const installation = {
  type: "input",
  message: "What command should be used to install dependencies?",
  name: "installation",
};
const contributing = {
  type: "input",
  message: "What should the user know about contributing to the repo?",
  name: "contributing",
};
const tests = {
  type: "input",
  message: "What command should be used to run tests?",
  name: "tests",
};

const license = 
  {
    type: "list",
    name: "license",
    message: "Which license will you use?",
    choices: [
      "Academic Free License v3.0",
      "Apache license 2.0",
      "OniEclipse Public License 1.0ons",
      "PostgreSQL License",
    ]
};
const badges = {
  "Academic Free License v3.0":
    "https://img.shields.io/badge/License-AFL%203.0-blue.svg",
  "Apache license 2.0":
    "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
  "OniEclipse Public License 1.0ons":
    "https://img.shields.io/badge/License-EPL%201.0-red.svg",
  "PostgreSQL License":
    "https://img.shields.io/badge/License-PostgreSQL-blue.svg",
};

const githubUser = {
  type: "input",
  message: "What is your github username?",
  name: "gitHubUser",
};
const gitHubLink = {
  type: "input",
  message: "Please provide a link to your github account:",
  name: "gitHubLink",
};
const email = {
  type: "input",
  message: "What is your email?",
  name: "email",
};
inquirer
    .prompt([githubUser, gitHubLink, email, title, description, installation, usage, contributing, tests, license, ])
    .then((response) => {
      const badge = badges[response.license];
  
      fs.writeFile(
        "readme.md",
        `# ${response.title}
  ### [![lic](${badge})](LICENSE)
  ## Description:
  ${response.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation: 
  ${response.installation}
  ## Usage: 
  ${response.usage}
  ## Contributing: 
  ${response.contributing}
  ## License:
  This application is covered under the following license: ${response.license}
  ## Tests: 
  ${response.tests}
  ## Questions: 
  ### github username: 
  #### ${response.gitHubUser}
  ### github link: 
  #### ${response.gitHubLink}
  ### If you would like to reach me with additional questions, here is my email: 
  #### ${response.email}
        `,
      (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('File has been written successfully!');
        }
      });
    });

