const db = require('mysql')
const koneksi = db.createConnection({
    host: 'localhost',
    user: 'accupc',
    password: 'accupc',
    database: 'expressLearn',
})

koneksi.connect()

koneksi.query('SELECT 1 + 1 AS Solution', (err, rows, fields) => {
    if (err) throw err

    console.log('koneksi nya bro :'.rows[0].solution)
})

koneksi.end()