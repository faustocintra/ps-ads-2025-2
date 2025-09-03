import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'
import customersRoute from './routes/customers.js'
import carsRoute from './routes/cars.js'

const app = express()

// Middlewares
app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

/**************** ROTAS *******************/
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/customers', customersRoute)
app.use('/cars', carsRoute)

export default app
