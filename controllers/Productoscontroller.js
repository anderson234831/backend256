const Productos = require('../models/productos');
//funcion agregar productos

exports.agregarProductos = async(req, res) =>{
    try {
        
       let producto = new Productos(req.body);
        await producto.save();
        res.json(producto);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un producto');
        
    }
}
// funcion buscar productos
exports.buscarProductos = async (req,res) =>{
    try {
       const productos = await Productos.find();
       res.json(productos) 
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al mostrar los productos');
    }
}
exports.mostrarProductos = async(req,res)=>{
    try {
        let producto = await Productos.findById(req.params.id);
        if(!producto){
            res.status(404).send({msg:"producto no encontrado con ese ID"})
            
        }else{
            res.json(producto);
        }
        
    } catch (error) {
console.log(error)
 res.status(500).send('hubo un error al mostrar un producto');
        
    }
}

//funcion modificar producto metodo patch
exports.modificarProductos= async (req,res)=>{
    try {
        const productos = await Productos.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if(!productos){
            res.status(404).send({msg:"producto no encontrado con ese ID"})
            
        }else{
            res.json(productos);
        }
        
    } catch (error) {
        console.log(error)
 res.status(500).send('hubo un error al modificar un producto');
        
    }
}
exports.actualizarProductos = async(req,res) =>{
    try {
        const productos = await Productos.findOneAndUpdate( {_id: req.params.id}, req.body,{new:true});
        if(!productos){
            res.status(404).send({msg:"producto no encontrado con ese ID"})
            
        }else{
            res.json(productos);
        }

    } catch (error) {
        console.log(error)
 res.status(500).send('hubo un error al actualizar un producto');
        
    }
}

exports.eliminarProductos = async( req,res) =>{
    try {
        const productos = await Productos.findById(req.params.id);
        if(!productos){
            res.status(404).send({msg:"producto  no encontrado con ese ID"})
            
        }else{
           await Productos.findOneAndDelete({_id: req.params.id});
           res.json({msg: "Producto eliminado"});
        }
    } catch (error) {
        console.log(error)
 res.status(500).send('hubo un error al eliminar un producto');
        
    }
}


