import prisma from '../database/client.js'

const controller = {}   // Objeto vazio

// Criar um novo seller
controller.create = async function (req, res) {
  try {
    await prisma.seller.create({ data: req.body })
    res.status(201).end() // HTTP 201: Created
  }
  catch (error) {
    console.error(error)
    res.status(500).end() // HTTP 500: Internal Server Error
  }
}

// Recuperar todos os sellers
controller.retrieveAll = async function (req, res) {
  try {
    const result = await prisma.seller.findMany({
      orderBy: [{ fullname: 'asc' }]
    })
    res.send(result) // HTTP 200: OK
  }
  catch (error) {
    console.error(error)
    res.status(500).end()
  }
}

// Recuperar apenas 1 seller pelo id
controller.retrieveOne = async function (req, res) {
  try {
    const result = await prisma.seller.findUnique({
      where: { id: Number(req.params.id) }
    })

    if (result) res.send(result)   // Encontrado ~> 200
    else res.status(404).end()     // Não encontrado ~> 404
  }
  catch (error) {
    console.error(error)
    res.status(500).end()
  }
}

// Atualizar seller
controller.update = async function (req, res) {
  try {
    await prisma.seller.update({
      where: { id: Number(req.params.id) },
      data: req.body
    })
    res.status(204).end() // Atualizado ~> 204
  }
  catch (error) {
    console.error(error)
    if (error?.code === 'P2025') res.status(404).end()
    else res.status(500).end()
  }
}

// Excluir seller
controller.delete = async function (req, res) {
  try {
    await prisma.seller.delete({
      where: { id: Number(req.params.id) }
    })
    res.status(204).end() // Excluído ~> 204
  }
  catch (error) {
    console.error(error)
    if (error?.code === 'P2025') res.status(404).end()
    else res.status(500).end()
  }
}

export default controller
