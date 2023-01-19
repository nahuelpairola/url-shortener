const express = require('express')

import * as controllers from '../controllers/url'

const routes = express.Router()

routes.route('/short').post(controllers.create)
routes.route('/short/:id').get(controllers.get)

export default routes