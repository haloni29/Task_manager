const Express = require('express')
const { check } = require('express-validator');
const { GetTareas, GetTarea, PostTarea, PutTarea, DeleteTarea } = require('../Controllers/Controllers');
const Router = Express.Router();

Router.get('/api/tasks', GetTareas)
Router.get('/api/tasks/:_id', GetTarea)
Router.post('/api/tasks', [
    check('Titulo', 'titulo requerido').not().isEmpty()
] ,PostTarea)
Router.put('/api/tasks/:_id', PutTarea)
Router.delete('/api/tasks/:_id', DeleteTarea)

module.exports = Router


