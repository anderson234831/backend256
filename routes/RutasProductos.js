const express = require('express');
const router = express.Router();
const Productoscontroller = require('../controllers/Productoscontroller');

// rutas del Crud
router.post('/',Productoscontroller.agregarProductos);
router.get('/',Productoscontroller.buscarProductos);
router.get('/:id',Productoscontroller.mostrarProductos);
//router.patch('/:id',Productoscontroller.modificarProductos);
router.put('/:id',Productoscontroller.actualizarProductos);
router.delete('/:id',Productoscontroller.eliminarProductos);



module.exports = router;