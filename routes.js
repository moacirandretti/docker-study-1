const express = require('express')

const Controller = require('./src/controllers/initialController')
const initialController = new Controller()

const routes = express.Router()

routes.post('/showuser', initialController.showUser)

module.exports = routes
