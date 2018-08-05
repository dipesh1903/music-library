const joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: joi.string().email(),
      password: joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error, value} = joi.validate(req.body, schema)
    console.log(value)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: `You must provide a valid email address `
          })
          break
        case 'password':
          res.status(400).send({
            error: `Password not following the given criteria
              <br>
              1. Must be either string, numbers
              <br>
              2.Must be  8 to 32 characters of length`
          })
          break
        default:
          res.status(200).send({
            error: `Some other error is existing`
          })
      }
    } else {
      next()
    }
  }

}
