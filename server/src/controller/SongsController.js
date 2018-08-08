const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: `Server Problem try again after some time`
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: `Server Error found`
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: `Server Error found`
      })
    }
  },
  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      console.log(song)
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: `Server Error found`
      })
    }
  }
}
