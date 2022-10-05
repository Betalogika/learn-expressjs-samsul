import mysql from 'mysql'

var conn = mysql.createConnection({
    host: "localhost",
    user: "accupc",
    password: "accupc",
    port: 3306,
    database: "expressLearn"
})

export default conn