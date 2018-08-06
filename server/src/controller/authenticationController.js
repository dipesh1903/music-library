const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const users = await User.create(req.body)
      console.log(users)
      res.send({
        user: users.toJSON(),
        token: jwtSignUser(users.toJSON())
      })
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
        return res.status(403).send({
          error: `This email id does not exist`
        })
      }
      console.log(`${email} and ${password}`)
      const pass = await user.comparePassword(password)
      console.log(`${pass}`)
      if (!pass) {
        return res.status(403).send({
          error: `incorrect Password`
        })
      }
      res.send({
        message: user.toJSON(),
        token: jwtSignUser(user.toJSON())
      })
    } catch (error) {
      res.status(500).send({
        error: 'Server issue , try after some time'
      })
    }
  }
}
