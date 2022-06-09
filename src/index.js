// import inquirer
const inquirer = require("inquirer");
// import fs
const fs = require("fs");

const { questions } = require("./questions");
// const questions = [
//   {
//     type: "input",
//     name: "title",
//     message: "Please enter title of your project?",
//   },

//   {
//     type: "input",
//     name: "description",
//     message: "Please enter your project description",
//   },

//   {
//     type: "input",
//     name: "installation",
//     message: "Please enter your project installation instructions:",
//   },

//   {
//     type: "input",
//     name: "usage",
//     message: "Please enter your project usage information:",
//   },
//   {
//     type: "list",
//     name: "license",
//     message: "Please choose your license",
//     choices: ["MIT", "Apache"],
//   },

//   {
//     type: "input",
//     name: "contributions",
//     message: "Please enter your project contribution guidelines:",
//   },

//   {
//     type: "input",
//     name: "test",
//     message: "Please enter your project test instructions:",
//   },

//   {
//     type: "input",
//     name: "githubUserName",
//     message: "Please enter your GitHub username:",
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "Please enter your email address:",
//   },
// ];

const createReadME = (answers) => {
  const templateReadMe = `# ${answers.title} ![License](https://img.shields.io/badge/${answers.license}-license-green)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${answers.description}

## Installation

Please follow the instructions below:

${answers.installation}
\`\`\`npm install\`\`\`

## Usage

Please follow the instructions below:
${answers.usage}

\`\`\`npm run start\`\`\`

## License
${answers.license}
MIT License

## Contributing
${answers.contributions}
## Tests

${answers.test}
Please follow the instructions below:

${answers.email}

## Questions

Please contact me on my email:  ${answers.email}

Visit my GitHub profile [here](https://github.com/${answers.githubUserName})
`;

  return templateReadMe;
};

const init = async () => {
  // get answers for first set of questions
  const answers = await inquirer.prompt(questions);

  // display answers
  console.log(answers);

  //generate read me template using the answer
  const generatedReadMe = createReadME(answers);
  //create readme
  fs.writeFileSync("./generatedreadme.md", generatedReadMe);
};

// 4. start your application
init();
