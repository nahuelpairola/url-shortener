import express = require('express')
const bodyParser = require('body-parser')
require('express-async-errors')
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express().use(bodyParser.json());
const port = process.env.PORT || 4000

// routes
import routesUrl from './routes/url'
import { errorHandler } from './middleware/error-handler'

app.use('/api/v1',routesUrl)
app.use(errorHandler)

mongoose
    .connect(process.env.MONGO_URI!)
    .then(()=>{
        app.listen(4000,()=> console.log(`url-shortener listening on http://localhost:${port}/api/v1`))
    })
    .catch((err:any)=>{
        console.log('An error has ocurred while connecting to database:', err);
    })