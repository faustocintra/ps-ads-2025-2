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

 
 
/**************** ROTAS *******************/
 
import customersRoute from './routes/customers.js'
app.use('/customers', customersRoute)
 
import carsRouter from './routes/cars.js'
app.use('/cars', carsRouter)

import usersRouter from './routes/users.js'
app.use('/users', usersRouter)
 
export default app