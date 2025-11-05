/*
  Middleware de autorização
*/
import jwt from 'jsonwebtoken'

/*
  Algumas rotas como /users/login podem ser acessadas
  SEM necessidade de token
*/
const bypassRoutes = [
  { url: '/users/login', method: 'POST' }
]

export default function (req, res, next) {

  // Verifica se a rota deve ignorar autenticação
  for (let route of bypassRoutes) {
    if (route.url === req.url && route.method === req.method) {
      return next()
    }
  }

  /*
    Tenta pegar o token primeiro no cookie.
    Se não tiver, pega no header Authorization.
  */
  let token =
    req.cookies?.[process.env.AUTH_COOKIE_NAME] || 
    req.headers?.authorization?.split(" ")[1]

  console.log("TOKEN RECEBIDO:", token)

  // Se não encontrou token → Forbidden
  if (!token) {
    console.error("ERRO DE AUTORIZAÇÃO: falta token")
    return res.status(403).end()
  }

  // Verifica validade
  jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
    if (error) {
      console.error("ERRO DE AUTORIZAÇÃO: token inválido/expirado")
      return res.status(403).end()
    }

    // Guarda o usuário dentro da requisição
    req.authUser = user

    // Continua para o controller
    next()
  })
}