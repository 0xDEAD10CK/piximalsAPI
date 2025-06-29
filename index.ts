import dotenv from 'dotenv'
import express, { urlencoded, json, Application } from 'express'
import cors from "cors";

// IMPORT ROUTES BELOW
import auth from './routes/auth.ts'
import shop from './routes/shop.ts'
import player from './routes/player.ts'
import admin from './routes/admin.ts'
import adventure from "./routes/adventure.ts"

dotenv.config()

const app: Application = express()
app.use(cors());

const BASE_URL: string = 'api'
const CURRENT_VERSION: string = 'v1'

const PORT: number = parseInt(process.env.PORT || '3000', 10)

app.use(urlencoded({ extended: false }))
app.use(json())

// PLAYER ROUTES BELOW
app.use(`/${BASE_URL}/${CURRENT_VERSION}/auth`, auth)
app.use(`/${BASE_URL}/${CURRENT_VERSION}/shop`, shop)
app.use(`/${BASE_URL}/${CURRENT_VERSION}/my`, player)
app.use(`/${BASE_URL}/${CURRENT_VERSION}/adventure`, auth, adventure)

// ADMIN ROUTES BELOW
app.use(`/${BASE_URL}/${CURRENT_VERSION}/admin`, admin)


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

export default app