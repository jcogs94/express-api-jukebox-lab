const Track = require('../models/track.js')

const create = async (req, res) => {
    try {
        const newTrack = await Track.create(req.body)
        res.status(201).json(newTrack)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const index = async (req, res) => {
    try {
        const allTracks = await Track.find()
        res.status(200).json(allTracks)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const show = async (req, res) => {
    try {
        const foundTrack = await Track.findById(req.params.trackId)
        res.status(200).json(foundTrack)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const update = async (req, res) => {
    try {
        const foundTrack = await Track.findByIdAndUpdate(req.params.trackId)
        res.status(200).json(foundTrack)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const del = async (req, res) => {
    try {
        const foundTrack = await Track.findByIdAndDelete(req.params.trackId)
        res.status(200).json(foundTrack)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    create, index, show, update, del
}
