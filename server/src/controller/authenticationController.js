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
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        res.status(403).send({
          error: `This email id does not exist`
        })
      } else {
        const pass = password === user.password
        if (!pass) {
          res.status(403).send({
            error: `incorrect Passoword`
          })
        } else {
          res.send({
            message: user.toJSON()
          })
        }
      }
    } catch (error) {
      res.status(500).send({
        error: 'Server issue , try after some time'
      })
    }
  }
}
