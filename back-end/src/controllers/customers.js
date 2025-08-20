import prisma from '../database/client.js'

const controller = {} //objeto vazio

controller.create = function(req, res){
    try {
        prisma.customer.create({ data: req.body})
        res.status(201).end()
    }
    
    catch(error){
        console.error(error)
        res.status(500).end()
    }   
}
export default controller