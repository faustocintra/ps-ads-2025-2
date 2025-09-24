import express from 'express'
import controller from '../controllers/sellerController.js'

const router = express.Router()

router.post('/', controller.create)
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

export default router