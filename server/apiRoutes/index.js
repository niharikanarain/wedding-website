'use strict'

const router = require('express').Router()

router.use('/guests', require('./guests'))
router.use('/codes', require('./codes'))

// for unrecognizable routes
router.use((req, res, next) => {
  const err = new Error('Not found.')
  err.status = 404
  next(err)
})

module.exports = router
