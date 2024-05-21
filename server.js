const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
    console.log(`Conneted to MongoDB - ${mongoose.connection.name}`)
})

app.use(cors())
app.use(express.json())

const trackRouter = require('./controllers/tracks.js')
app.use('/tracks', trackRouter)

app.listen(3008, () => {
    console.log('Listening on port 3008...')
})
