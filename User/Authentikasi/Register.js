const express = require('express')
const app = express()

app.get('/namaRoutes', (res, req) => {
    res.send('halo halaman registrasi')
}) 