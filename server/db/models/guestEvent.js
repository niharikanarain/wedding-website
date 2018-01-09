'use strict'

const db = require('../index')
const DataTypes = db.Sequelize

const GuestEvent = db.define('guestEvents', {
  attending: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
})

module.exports = GuestEvent
