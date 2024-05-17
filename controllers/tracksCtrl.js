const Track = require('../models/track.js')

const create = async (req, res) => {
    try {
        const newTrack = await Track.create(req.body)
        res.status(201).json(newTrack)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    create
}
