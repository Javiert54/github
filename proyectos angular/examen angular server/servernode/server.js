const express = require("express");

// const initDB = require('./config/dbase');

const app = express();

const port = 3001;
app.listen(port,()=>{
	console.log("La aplicación está en línea");
});
const userRoutes = require('./routes/userRoutes');
const cursoRoutes = require('./routes/cursoRoutes');

app.use(userRoutes, cursoRoutes);

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/appweb',{

	useNewUrlParser :true,
})
.then(()=>{
	console.log('Conexión establecida');
})
.catch(err=>console.log(err))
