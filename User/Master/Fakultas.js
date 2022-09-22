const exrpess = require('express')

const app = exrpess()

const port = 8081

app.get('universitas', (res, req) => {
    res.send('halo universitas')
})

app.listen(port, () => {
    console.log(`halo universitas : ${port}`)
})