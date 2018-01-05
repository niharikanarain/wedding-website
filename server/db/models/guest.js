'use strict'

const db = require('../index')
const DataTypes = db.Sequelize

const Guest = db.define('guest', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  }
})

module.exports = Guest
