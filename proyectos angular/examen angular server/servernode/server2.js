const express = require('express')
const mongoose = require('mongoose')
const conectarDB = require('./config/db')
const cors = require("cors")

// Creamos el servidor
const app = express()




// Conectamos DB Cursos
conectarDB();
app.use(cors())
app.use(express.json());
app.use('/api/cursos', require('./app/routes/cursoroutes'));
app.listen(3700, () => {
    console.log('El servidor esta corriendo perfectamente')
})