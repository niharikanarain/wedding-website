'use strict'

const db = require('./server/db/models/index').db
const app = require('./main')
const chalk = require('chalk')
const seed = require('./seed').seed

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

db.sync({ force: true })
  .then(() => {
    console.log(chalk.blue('seeding database...'))
    return seed()
  })
  .then(() => {
    console.log(chalk.green('db synced'))
    app.listen(port, () => {
      console.log(chalk.magenta(`ringing wedding bells on port ${port}`))
    })
  })
