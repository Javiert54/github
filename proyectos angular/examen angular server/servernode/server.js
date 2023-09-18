// const express = require("express");

// // const initDB = require('./config/dbase');

// const app = express();

// const port = 3001;
// // app.listen(port,()=>{
// // 	console.log("La aplicación está en línea");
// // });
// const userRoutes = require('./routes/userRoutes');
// const cursoRoutes = require('./routes/cursoRoutes');
// const messageRoutes = require('./routes/messageRoutes');

// app.use('/api/cursos', cursoRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/messages', messageRoutes);

// app.listen(port, () => {
// 	console.log("El servidor esta corriendo perfectamente");
// });


// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://127.0.0.1:27017/dbExamen',{

// 	useNewUrlParser :true,
// })
// .then(()=>{
// 	console.log('Conexión establecida');
// })
// .catch(err=>console.log(err))








const express = require('express')
const mongoose = require('mongoose')
const conectarDB = require('./config/db')
const cors = require("cors")

// Creamos el servidor
const app = express()

const userRoutes = require('./routes/userRoutes');
const cursoRoutes = require('./routes/cursoRoutes');
const messageRoutes = require('./routes/messageRoutes');


// Conectamos DB Cursos
conectarDB();
app.use(cors())
app.use(express.json());
app.use('/api/cursos', cursoRoutes);
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);


app.listen(3700, () => {
    console.log('El servidor esta corriendo perfectamente')
})