const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
    console.log(`Conneted to MongoDB - ${mongoose.connection.name}`)
})

app.use(express.json())

const trackRouter = require('./controllers/tracks.js')
app.use('/tracks', trackRouter)

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})
