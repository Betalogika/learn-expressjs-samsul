import modelUniversitas from '../../Models/Models_universitas.js'

export const indexUniversitas = (req, res) => {
    modelUniversitas.conn.connect(function (err) {
        modelUniversitas.conn.query(modelUniversitas.query_universitas, function (err, data, fields) {
            if (err) throw err;
            res.json({
                'Message': 'Succesfully Get Data',
                'Data': data
            })
        })
    })
}
export const storeUniversitas = (req, res) => {
    var universitas = req.query.universitas
    var akronim = req.query.akronim
    var keterangan = req.query.keterangan

    var data = modelUniversitas.insert_universitas + "(universitas, akronim, keterangan) VALUES ?"
    var values = [
        [universitas, akronim, keterangan]
    ]
    modelUniversitas.conn.query(data, [values], function (err) {
        if (err) throw err;
        res.json({
            'Message': 'SuccessFully Insert Data',
            'Data': req.query
        })
    })

}
export const ubahUniversitas = (req, res) => {
    res.send({
        'Message': 'SuccessFully Update Data',
        'Data': req.query.id
    })

}
export const hapusUniversitas = (req, res) => {
    res.send({
        'Message': 'SuccessFully Delete Data',
        'Data': req.query.id
    })

}