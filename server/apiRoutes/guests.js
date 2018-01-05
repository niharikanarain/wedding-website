'use strict'

const router = require('express').Router()
const models = require('../db/models')
const Guest = models.Guest
const Code = models.Code
const chalk = require('chalk')

router.post('/', (req, res, next) => {
  Guest.findOrCreate({
    where: {
      name: req.body.name,
      email: req.body.email
    }
  })
    .spread(guest => {
      console.log(chalk.blue('GUEST FOUND HERE: ', guest))
      return guest
    })
    .then((guest) => {
      console.log(chalk.blue('GUEST FOUND and REQ.BODY.CODE ', guest, req.body.code))
      Code.findOne({
        where: {
          code: req.body.code
        }
      })
      .then(code => {
        console.log(chalk.red('CODE OBTAINED: ', code))
        guest.setCode(code)
      })
      .then(res.json(guest))
    })
    .catch(err => console.error(err))
})

module.exports = router
