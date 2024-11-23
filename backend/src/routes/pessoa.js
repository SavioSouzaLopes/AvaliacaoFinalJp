const express = require('express')
const controllerCliente = require('../controllers/cliente')
const controllerFilme = require('../controllers/filme')
const auth = require("../middleware/auth")

const router = express.Router()

router.post('/', controllerCliente.CreateCliente)
router.post('/login', controllerCliente.Login)

router.get('/:id', auth, controllerFilme.GetFilmes) ///filmes/locar
router.delete('/:id', auth, controllerFilme.DeleteFilme) ///filmes/devoler

router.get('/', auth, controllerCliente.GetClientes)
router.get('/session', auth, controllerCliente.GetSession)
router.put('/:id', auth, controllerCliente.UpdateCliente)
router.delete('/:id', auth, controllerCliente.DeleteCliente)

module.exports = router