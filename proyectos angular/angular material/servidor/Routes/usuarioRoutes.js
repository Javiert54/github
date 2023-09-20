const express = require('express')
const router = express.Router()
const userController = require('../Controllers/usuarioController');

router.post('/', userController.crearUsuario);
router.get('/', userController.obtenerUsuarios);
router.put('/:id', userController.actualizarUsuario);
router.get('/:id', userController.obtenerUsuario);
router.delete('/:id', userController.eliminarUsuario);

module.exports = router;