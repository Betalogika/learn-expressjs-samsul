

class Jurusan {

    constructor(req, res) {
        this.jurusan = req.body.nama_jurusan
        this.akronim = req.body.akronim
        this.keterangan = req.body.keterangan
    }
}

export default {
    Jurusan
}