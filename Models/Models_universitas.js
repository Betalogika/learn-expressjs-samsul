import conn from '../Config/databases.js'

const query_universitas = "SELECT * FROM universitas"

const insert_universitas = "INSERT INTO universitas"

const update_universitas = "UPDATE universitas"

export default {
    conn,
    query_universitas,
    insert_universitas,
    update_universitas
}