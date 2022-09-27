import express from "express"

import routes from "./Routes/web.js";

const port = 8081;

const app = express()

app.use(routes)

// port express
app.listen(port, () => {
    console.log(`port nya jalan hei ${port}`)
})