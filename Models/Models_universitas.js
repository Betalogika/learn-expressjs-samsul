import conn from '../Config/databases.js'

const universitas = conn.connect(function (err, res) {
    if (err) throw err;
    console.log('jalan tuh koneksi nya')
})

export default universitas