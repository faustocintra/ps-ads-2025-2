import prisma from '../database/client.js'

const controller = {} // Objeto vazio

//Todas as funcções de controller tem, pelo menos
//dois parametros:
//req ~>representa a requisição (request)
//res ~>representa a resposta (response)
controller.create = function (req,res) {
    try{
        //Para a inserção no BD,os dados são enviados
        //dentro de um objeto chamado "body" que vem
        //dentro da requisição ("req")
        prisma.customer.create({ data: req.body})

        //Se tudo der certo,enviamos o código HTTP
        //apropriado, no caso
        //HTTP 201:created
        res.status(201).end()
    }
    catch(error) {
        //Se algo de errado ocorrer, cairemos aqui
        console.error(error) //Exibe o erro no terminal

        //Enviamos como resposta o código HTTP relativo
        //a erro interno do servidor
        //HTTP 500: Internal Server Error
        res.status(500).end()
    }
}

export default controller
