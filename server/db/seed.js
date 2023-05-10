const {createTables, dropTables} = require('./initdb')
const pool = require('./db')


const rebuildDb = async() => {
    pool.connect()
    await dropTables()
    await createTables()
    pool.end()
}

rebuildDb()