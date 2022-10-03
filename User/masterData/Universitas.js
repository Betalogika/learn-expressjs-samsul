import config from "../../Config/databases.js"

import mysql from 'mysql'

const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});
export const indexUniversitas = (req, res) => {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(
            `
            SELECT * FROM universitas;
            `
            , function (error, results) {
                if (error) throw error;
                res.send({
                    success: true,
                    message: 'SuccessFully Get Data!',
                    data: results
                });
            });
        connection.release();
    })

}
export const storeUniversitas = (req, res) => {

}
export const ubahUniversitas = (req, res) => {

}
export const hapusUniversitas = (req, res) => {

}