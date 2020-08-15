const insert = require("../cqlOperations/insert")
const inquirer = require("inquirer")
const questions = require("./questions")

const chooseTable = async () => {
  try {
    let chosenTable = await inquirer.prompt(questions.whichTableQ)
    return chosenTable.table
  } catch (error) {
    console.error(error)
  }
}

const insertOperationLookup = {
  Component: insert.insertComponentData,
  "Component by date": insert.insertComponentByDateData,
  "User by activity": insert.insertUserByActivityData,
  "File usage by month": insert.insertFileUsageByMonthData,
}

const checkIfThereIsANumber = (rowCount) => {
  const numbers = RegExp(/\d+/g)
  return numbers.test(rowCount)
}

module.exports = {
  checkIfThereIsANumber,
  insertOperationLookup,
  chooseTable,
}
