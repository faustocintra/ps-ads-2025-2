import { PrismaClient } from '../generated/prisma/default.js'

const prisma = new PrismaClient({
    log: [{
        emit: 'event',
        level: 'query'
    }]
})

// Exibe no terminal as instruções SQL enviadas ao BD
prisma.$on('query', event => {
    console.log('-'.repeat(60))
    console.log(event.query)
    if(event.params) console.log('PARAMS:', event.params)
})

export default prisma