const express = require('express')
const app = express()

app.get('/namaRoutes', (res, req) => {
    res.send('halo halaman registrasi')
})

app.post('/namaroutes', (res, req) => {
    res.send('halo')
})

app.put('/namaroutes', (res, req) => {
    res.send('halo mbak')
})

app.delete('/namaroutes', (req, res) => {
    res.send('halo')
})