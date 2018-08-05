const authenticationController = require('../controller/authenticationController')

module.exports = (app) => {
  app.get('/register', authenticationController.register
  )
}
