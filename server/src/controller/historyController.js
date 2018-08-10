const {History, Song} = require('../models')
const _ = require('lodash')

module.exports = {
  async post (req, res) {
    try {
      console.log(req.body)
      const {songId, userId} = req.body
      const history = await History.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (!history) {
        const bk = await History.create({
          SongId: songId,
          UserId: userId
        })
        return res.send(bk)
      } else {
        return res.status(200)
      }
    } catch (err) {
      res.status(500).send('server issue try after some time')
    }
  },
  async index (req, res) {
    try {
      const {userId} = req.query
      const history = await History.findAll({
        where: {
          UserId: userId
        },
        include: [Song]
      }).map(history => history.toJSON()).map(history => _.extend({id: history.id}, history.Song))
      console.log('ye history wale hai')
      console.log(history)
      res.send(history)
    } catch (err) {
      res.status(500).send('server issue try after some time')
    }
  }
}
