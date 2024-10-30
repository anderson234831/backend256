const express = require('express');
const router = express.Router();
const Clientecontroller = require('../controllers/Clientecontroller');

//rutas del crud
router.post('/',Clientecontroller.agregarClientes);
router.get('/',Clientecontroller.buscarClientes);
router.get('/:id',Clientecontroller.mostrarCliente);
//router.patch('/:id',Clientecontroller.modificarClientes);
router.put('/:id',Clientecontroller.actualizarClientes);
router.delete('/:id',Clientecontroller.eliminarClientes);



module.exports = router;