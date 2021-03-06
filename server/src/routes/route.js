const authenticationController = require('../controller/authenticationController')
const authenticationValidationPolicy = require('../policy/authenticationValidatorPolicy')
const SongsController = require('../controller/SongsController')
const bookmarkController = require('../controller/bookmarkController')
const historyController = require('../controller/historyController')

module.exports = (app) => {
  app.post('/register', authenticationValidationPolicy.register, authenticationController.register
  )
  app.post('/login', authenticationController.login)
  app.get('/songs', SongsController.search)
  app.post('/songs', SongsController.post)
  app.get('/song/:songId', SongsController.show)
  app.put('/song/:songId', SongsController.put)
  app.get('/bookmarks', bookmarkController.index)
  app.post('/bookmarks', bookmarkController.post)
  app.get('/bookmarks/:bookmarkId', bookmarkController.delete)
  app.get('/bookmark', bookmarkController.get)
  app.get('/history', historyController.index)
  app.post('/history', historyController.post)
}
