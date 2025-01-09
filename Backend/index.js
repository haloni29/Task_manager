require('dotenv').config();
const Express = require('express');
const { ConexionDB } = require('./config/config');
const Router = require('./Routes/Router');
const { TareaModel } = require('./Models/Model')
const { default: mongoose } = require('mongoose');
const cors = require('cors')
const App = Express();
const PORT = process.env.PORT;

App.use(cors())

App.use(Express.json())
App.use('/', Router)


App.listen(PORT, () => {
    console.log(`corriendo en el puerto ${PORT}`);
})
ConexionDB()
const tarea = mongoose.model('Tareas', TareaModel);


