const mongoose  = require("mongoose")

const TareaModel = new mongoose.Schema({
    Titulo: {
        type: String,
    },
    Descripcion:{
        type: String,
    },
    Estado:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tareas', TareaModel);