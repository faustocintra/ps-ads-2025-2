// Carregando as variáveis de ambiente do arquivo.env
import dotenv from 'dotenv'
dotenv.config()
import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index.js'

const app = express()

// Configurando o CORS para aceitar requisições a partir
// dos servidores configurados na variável de ambiente
// ALLOWED_ORIGINS
import cors from 'cors'
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS.split(','),
  credentials: true   // Habilita o envio de cookies para o front-end
}))

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)

/**************** ROTAS *******************/

import customersRoute from './routes/customers.js'
import carsRoute from './routes/cars.js'
import usersRoute from './routes/users.js'
import sellerRoute from './routes/seller.js'
// Middleware de verificação de autorização
import authMiddleware from './middleware/auth.js'
app.use(authMiddleware)
app.use('/customers', customersRoute)
app.use('/cars', carsRoute)
app.use('/users', usersRoute)
app.use('/seller', sellerRoute)

export default app
