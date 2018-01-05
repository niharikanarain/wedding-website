'use strict'

const db = require('../index')
const DataTypes = db.Sequelize

const Event = db.define('event', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  when: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

module.exports = Event
