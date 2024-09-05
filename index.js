import dotenv from 'dotenv'
import express, { urlencoded, json } from 'express'

// IMPORT ROUTES BELOW
import adminAuthRoute from './middleware/adminAuthRoute.js'

import auth from './routes/auth.js'
import monster from './routes/monster.js'
import shop from './routes/shop.js'
import player from './routes/player.js'
import admin from './routes/admin.js'
import item from './routes/item.js'

dotenv.config()

const app = express()

const BASE_URL = 'api'
const CURRENT_VERSION = 'v1'

const PORT = process.env.PORT

app.use(urlencoded({ extended: false }))
app.use(json())

app.use(`/${BASE_URL}/${CURRENT_VERSION}/auth`, auth)
app.use(`/${BASE_URL}/${CURRENT_VERSION}/monster`, monster)
app.use(`/${BASE_URL}/${CURRENT_VERSION}/shop`, shop)
app.use(`/${BASE_URL}/${CURRENT_VERSION}/my`, player)
app.use(`/${BASE_URL}/${CURRENT_VERSION}/item`, item)
app.use(`/${BASE_URL}/${CURRENT_VERSION}/admin`, adminAuthRoute, admin)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
