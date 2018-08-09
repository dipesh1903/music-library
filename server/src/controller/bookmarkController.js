const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      console.log(`${songId}  jd ${userId}`)
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send('server issue try after some time')
    }
  },
  async post (req, res) {
    try {
      console.log(req.body)
      const {songId, userId} = req.body.params
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (!bookmark) {
        const bk = await Bookmark.create({
          SongId: songId,
          UserId: userId
        })
        return res.send(bk)
      } else {
        return res.status(500).send('Bookmark already exist')
      }
    } catch (err) {
      res.status(500).send('server issue try after some time')
    }
  },
  async delete  (req, res) {
    try {
      console.log(req.params)
      const {bookmarkId} = req.params
      const bk = await Bookmark.findById(bookmarkId)
      await bk.destroy()
      res.send(bk)
    } catch (err) {
      res.status(500).send('server error unable to delete')
    }
  }
}
