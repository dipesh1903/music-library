const authenticationController = require('../controller/authenticationController')
const authenticationValidationPolicy = require('../policy/authenticationValidatorPolicy')
const SongsController = require('../controller/SongsController')

module.exports = (app) => {
  app.post('/register', authenticationValidationPolicy.register, authenticationController.register
  )
  app.post('/login', authenticationController.login)
  app.get('/songs', SongsController.index)
  app.post('/songs', SongsController.post)
}
