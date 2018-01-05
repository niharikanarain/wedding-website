'use strict'

const router = require('express').Router()
const models = require('../db/models')
const Code = models.Code

router.post('/', (req, res, next) => {
  Code.findOrCreate({
    where: req.body
  })
    .spread(code => code)
    .then((code) => {
      res.json(code)
    })
    .catch(err => console.error(err))
})

module.exports = router
