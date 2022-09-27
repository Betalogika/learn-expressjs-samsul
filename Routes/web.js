import express from "express";

import { Login, Register } from "../User/Authentikasi/Auth.js"

import { Universitas, Fakultas, Jurusan } from "../User/masterData/UserMasterData.js"

const routes = express.Router()

//routes auth
routes.post('/login', Login)
routes.post('/register', Register)

//routes user master data
routes.post('/universitas', Universitas)
routes.post('/fakultas', Fakultas)
routes.post('/jurusan', Jurusan)



export default routes