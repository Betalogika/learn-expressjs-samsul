import conn from '../Config/databases.js'

const query = "SELECT * FROM universitas"

const insert = "INSERT INTO universitas"


export default {
    conn,
    query,
    insert
}