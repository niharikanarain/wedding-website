'use strict'

const router = require('express').Router()
const models = require('../db/models')
const Code = models.Code

router.post('/', (req, res, next) => {
  Code.create(req.body)
    .then((code) => {
      res.json(code)
    })
    .catch(err => console.error(err))
})

module.exports = router
