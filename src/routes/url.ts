const express = require('express')
const routes = express.Router()

import * as controllers from '../controllers/url'

const validator = require('express-joi-validation').createValidator({})
import { UrlBody, UrlId } from '../validators-sanitizers/url'

routes.route('/short').post(validator.body(UrlBody),controllers.create)
routes.route('/short/:id').get(controllers.get)

export default routes