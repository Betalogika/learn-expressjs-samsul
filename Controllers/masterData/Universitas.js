import modelUniversitas from '../../Models/Models_universitas.js'

export const indexUniversitas = (req, res) => {
    modelUniversitas.conn.connect(function (err) {
        modelUniversitas.conn.query(modelUniversitas.query, function (err, data, fields) {
            if (err) throw err;
            res.json({
                'Message': 'Succesfully Get Data',
                'Data': data
            })
        })
    })
}
export const storeUniversitas = (req, res) => {
    var data = `${modelUniversitas.insert} ${(universitas, akronim, keterangan)} ${VALUES(req.query.universitas, req.query.akronim, req.query.keterangan)}`
    modelUniversitas.conn(data, function (err, data) {
        if (err) throw err;
        res.json({
            'Message': 'SuccessFully Insert Data',
            'Data': data
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