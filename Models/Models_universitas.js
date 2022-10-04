import conn from '../Config/databases.js'

const query_universitas = "SELECT * FROM universitas"

const insert_universitas = "INSERT INTO universitas"

export default {
    conn,
    query_universitas,
    insert_universitas
}