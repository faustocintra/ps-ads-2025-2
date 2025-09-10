import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index.js'

const app = express()

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)

/***************ROTAS***************/
import customersRoute from './routes/customers.js'
import carsRoute from './routes/cars.js'
import usersRoute from './routes/users.js'
app.use('/customers', customersRoute)
app.use('/cars', carsRoute)
app.use('/users', usersRoute)
export default app
