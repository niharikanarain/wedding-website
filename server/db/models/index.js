'use strict'

const db = require('../index')

const Guest = require('./guest')
const Event = require('./event')
const Code = require('./code')
const GuestEvent = require('./guestEvent')

Guest.belongsTo(Code)
Code.hasMany(Guest)
Guest.belongsToMany(Event, { through: GuestEvent })
Event.belongsToMany(Guest, { through: GuestEvent })

module.exports = {
  db: db,
  Guest: Guest,
  Event: Event,
  Code: Code
}
