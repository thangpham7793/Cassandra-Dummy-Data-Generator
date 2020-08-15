const inquirer = require("inquirer")
const questions = require("./questions")
const {
  checkIfThereIsANumber,
  insertOperationLookup,
  chooseTable,
} = require("./helpers")

//DATABASE-RELATED
const client = require("../client")
const createTable = require("../cqlOperations/createTable")

//INSERT
const chooseRowCountAndInsert = async (
  tableNameToOperationLookup,
  chosenTable
) => {
  let invalidInput = true
  while (invalidInput) {
    const { rowCount } = await inquirer.prompt(questions.newRowCountQ)

    //need to handle invalid input
    if (rowCount.toLowerCase() === "q") {
      break
    } else if (checkIfThereIsANumber(rowCount)) {
      console.log(`Inserting ${rowCount} rows`)
      await tableNameToOperationLookup[chosenTable](parseInt(rowCount))
      //FIXME: Promise.all won't pause execution
      mainMenu()
      break
    } else {
      console.log(
        `\nInvalid input: ${rowCount}. Please enter a number or Q to quit.`
      )
    }
  }
}

const chooseTableToInsert = async () => {
  let chosenTable = await chooseTable()
  console.log("chosen table: ", chosenTable)
  chosenTable === "Back to Main Menu"
    ? mainMenu()
    : chooseRowCountAndInsert(insertOperationLookup, chosenTable)
}

//GET COLUMNS
const getTableColumns = async (keyspace, tableName) => {
  client.connect().then(() => {
    console.log("Connected to Cloud!")
    const query =
      "SELECT column_name FROM system_schema.columns WHERE keyspace_name = ? AND table_name = ?;"
    const params = [keyspace, tableName]
    client
      .execute(query, params, { prepare: true })
      .then((res) => {
        console.log(
          `\nTable ${tableName.toUpperCase()} has the following columns: \n`
        )
        res.rows.forEach((r) => console.log(r.column_name))
        console.log()
        mainMenu()
      })
      .catch((err) => {
        console.error(err)
      })
  })
}

const chooseTableToGetColumns = async () => {
  const chosenTable = await chooseTable()
  if (chosenTable === "Back to Main Menu") {
    mainMenu()
  } else {
    const tableName = chosenTable.toLowerCase().replace(/ /g, "_")
    await getTableColumns("ob3", tableName)
  }
}

//TODO: delete

//TODO: create

//Main Program Flow
const mainMenu = () => {
  inquirer.prompt(questions.whichOperationQ).then(({ operation }) => {
    switch (operation) {
      case "Create all tables":
        createTable("Path Here")
        break
      case "Insert rows":
        chooseTableToInsert()
        break
      case "Delete tables":
        mainMenu()
        break
      case "Check a table's existing columns":
        chooseTableToGetColumns()
        break
      default:
        console.log("Bye")
        client.shutdown()
        process.exit(1)
    }
  })
}

module.exports = mainMenu
