const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const conectarDB = require('./db');


const app = express()
conectarDB()

app.use(cors());
app.use(express.json());

app.use('/api/users', require('./Routes/usuarioRoutes'))


app.listen(3001, () => {
	console.log('El servidor está en servicio correctamente');

})


