'use strict'

const db = require('../index')
const DataTypes = db.Sequelize

const Code = db.define('code', {
  code: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rsvp: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Code
