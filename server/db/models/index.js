'use strict'

const db = require('../index')

const Guest = require('./guest')
const Event = require('./event')
const Code = require('./code')

Guest.belongsTo(Code)
Code.hasMany(Guest)
Guest.belongsToMany(Event, { through: 'GuestEvents' })
Event.belongsToMany(Guest, { through: 'GuestEvents' })

module.exports = {
  db: db,
  Guest: Guest,
  Event: Event,
  Code: Code
}
