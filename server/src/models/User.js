const promise = require('bluebird')
const bcrypt = promise.promisifyAll(require('bcrypt'))
const saltRounds = 10

function hashPassword (user, options) {
  console.log('entered')
  if (!user.changed('password')) {
    console.log('firse aa gaya')
    return
  }
  return bcrypt.hash(user.password, saltRounds)
    .then(function (hash) {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword
    }
  })
  return User
}
