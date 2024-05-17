const express = require('express')
const router = express.Router()
const tracksCtrl = require('./tracksCtrl.js')

// ROUTES
router.post('/', tracksCtrl.create)
router.get('/', tracksCtrl.index)
router.get('/:trackId', tracksCtrl.show)
router.put('/:trackId', tracksCtrl.update)
router.delete('/:trackId', tracksCtrl.del)

module.exports = router
