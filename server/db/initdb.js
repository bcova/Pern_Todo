const pool = require('./db')

const createTables = async() => {
    try {
        console.log("Starting to create tables")
        await pool.query(`
        CREATE TABLE todo (
            todo_id SERIAL PRIMARY KEY,
            description VARCHAR(255)
        )
    `)
        console.log("Tables created")
    }catch(error) {
        console.error("There was an error creating the table", error)
        throw error
    }
}

const dropTables = async() => {
    try {
        console.log("Starting to drop table")
        await pool.query(
         `
         DROP TABLE IF EXISTS todo;
        `
        )
        console.log("Tables dropped")
    }catch(error) {
        console.error("There was an erroing dropping the tables", error)
        throw error
    }
}

module.exports = {
    createTables,
    dropTables
}