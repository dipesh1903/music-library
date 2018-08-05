const {User} = require('../models')
module.exports = {
  async register (req, res) {
    try {
      const users = await User.create(req.body)
      console.log(users)
      res.send(users.toJSON())
    } catch (err) {
      res.status(400).send({
        error: `The account is already in use`
      })
    }
  }
}
