const express = require('express')
import { connectDB } from './db/connect'
const bodyParser = require('body-parser')
require('express-async-errors')
import * as dotenv from 'dotenv'

const app = express().use(bodyParser.json());
const port = process.env.PORT || 4000

// routes
import routesUrl from './routes/url'
import { errorHandler } from './middleware/error-handler'
import {runSchedules} from './jobs'

app.use('/api/v1',routesUrl)
app.use(errorHandler)

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

async function start () {
    await connectDB()
    app.listen(4000,()=> console.log(`url-shortener listening on http://localhost:${port}/api/v1`))
    await runSchedules()
}

start()