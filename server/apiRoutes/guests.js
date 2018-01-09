'use strict'

const router = require('express').Router()
const models = require('../db/models')
const Guest = models.Guest
const Code = models.Code
const chalk = require('chalk')

router.post('/', (req, res, next) => {
  Guest.create({
      name: req.body.name,
      email: req.body.email
  })
    .then((guest) => {
      Code.findOne({
        where: {
          code: req.body.code
        }
      })
      .then(code => {
        guest.setCode(code)
      })
      .then(res.json(guest)) // why does this json not have the codeId eventhough it is set in the DB?
    })
    .catch(err => console.error(err))
})

module.exports = router
