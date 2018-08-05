const authenticationController = require('../controller/authenticationController')
const authenticationValidationPolicy = require('../policy/authenticationValidatorPolicy')

module.exports = (app) => {
  app.post('/register', authenticationValidationPolicy.register, authenticationController.register
  )
}
