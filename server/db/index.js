'use strict'

const Sequelize = require('sequelize')
const chalk = require('chalk')

console.log(chalk.yellow('opening database connection'))

module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/mn-wedding', {
  logging: false,
})

