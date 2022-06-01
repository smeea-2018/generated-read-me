const inquirer = require("inquirer");
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter title of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Please enter your project description",
  },

  {
    type: "input",
    name: "installation",
    message: "Please enter your project installation instructions:",
  },

  {
    type: "input",
    name: "usage",
    message: "Please enter your project usage information:",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose your license",
    choices: ["MIT", ""],
  },

  {
    type: "input",
    name: "contributions",
    message: "Please enter your project contribution guidelines:",
  },

  {
    type: "input",
    name: "test",
    message: "Please enter your project test instructions:",
  },

  {
    type: "input",
    name: "githubUserName",
    message: "Please enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
  },
];

const init = async () => {
  // get answers for first set of questions
  const answers = await inquirer.prompt(questions);

  // display answers
  console.log(answers);
};

// 4. start your application
init();
