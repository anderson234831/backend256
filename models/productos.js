const mongoose = require('mongoose');

//
const productosSchema  = mongoose.Schema({
Producto:{
    type:String,
    required:true
},
 Porciones_peso:{
    type:Number,
    required:true
},
Frutas:{
    type:String,
    required:true
},
Especiales :{
    type:String,
    required:true
}
},{versionkey:false});

module.exports = mongoose.model('productos',productosSchema);


