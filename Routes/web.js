import express from 'express'

import { indexUniversitas, storeUniversitas, ubahUniversitas, hapusUniversitas } from '../Controllers/masterData/Universitas.js'

const router = express.Router()

router.get('/universitas', indexUniversitas)
router.post('/universitas_add', storeUniversitas)
router.put('/universitas/:id/update', ubahUniversitas)
router.delete('/universitas/:id/delete', hapusUniversitas)


export default router