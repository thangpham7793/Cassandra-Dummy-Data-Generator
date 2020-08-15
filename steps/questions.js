const inquirer = require("inquirer")

const whichOperationQ = [
  {
    type: "list",
    name: "operation",
    message: "Choose an operation from the list.",
    choices: [
      "Create all tables",
      "Insert rows",
      "Check a table's existing columns",
      new inquirer.Separator(),
      "Exit",
    ],
  },
]

const whichTableQ = [
  {
    type: "list",
    name: "table",
    message: "Choose a table from the list",
    choices: [
      "Component",
      "Component by date",
      "User by activity",
      "File usage by month",
      new inquirer.Separator(),
      "Back to Main Menu",
    ],
  },
]

const newRowCountQ = [
  {
    type: "input",
    name: "rowCount",
    message:
      "How many new rows do you want to insert? (Type Q to go back to main menu)",
  },
]

module.exports = {
  whichTableQ,
  whichOperationQ,
  newRowCountQ,
}
