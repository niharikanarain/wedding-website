'use strict'

const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', require('./server/apiRoutes'))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')))

// handle 500 errors - has to be at the very end of the file
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.');
})

module.exports = app
