require('dotenv').config()
const mongoose = require('mongoose')
 
const ConexionDB = () => {
    mongoose.connect(process.env.DB)
    .then(console.log('base de datos conectado'))
    .catch((err) => console.log(err, '500: internal error server'))
}

module.exports = {
    ConexionDB
}

