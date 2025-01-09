const { response } = require('express');
const { validationResult } = require('express-validator')
const Tareas = require('../Models/Model');

const PostTarea =  async(req, res = response) => {
    const { Titulo, Descripcion, Estado } = req.body;
    const Tarea = new Tareas ({ Titulo, Descripcion, Estado});

    const validarErorres = validationResult(req);
    if( !validarErorres.isEmpty() ){
        return res.status(400).json(validarErorres)
    }
    await Tarea.save();
    res.json({
        msg: `la tarea con titulo ${Titulo} ha sido creado`
    })
}
const GetTareas = async(req, res = response) => {
    const tareas = await Tareas.find();
    res.json({
        tareas
    })
}
const GetTarea = async(req, res = response) => {
    const _id = req.params['_id'];
    const tarea = await Tareas.findById(_id);
    res.json({
        tarea
    })
}
const PutTarea = async(req, res = response) => {
    const { Titulo, Descripcion, Estado} = req.body;
    const _id = req.params['_id'];
    const tareaActualizada = await Tareas.findByIdAndUpdate(_id, { Titulo, Descripcion, Estado });
    res.json({
        msg: `la tarea con titulo ${Titulo} ha sido modificado`
    })
}
const DeleteTarea = async(req, res = response) => {
    const _id = req.params['_id']
    const tareaEliminada = Tareas.findByIdAndDelete(_id) 
    res.json({
        msg: 'la tarea ha sido eliminada'
    })
}

module.exports = {
    GetTarea,
    GetTareas,
    PostTarea,
    PutTarea,
    DeleteTarea
}
