import express from 'express'
const app = express()
import authRoutes from './routes/auth.v1.routes.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    res.status(200).json({
        message: "Connected to auth Service"
    })
})

app.use('/api/v1', authRoutes)

export default app