const express = require('express')

const app = express()

app.get('/universitas', (res, req) => {
    res.send('halo')
})