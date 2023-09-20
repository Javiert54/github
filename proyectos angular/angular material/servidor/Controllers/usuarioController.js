const userModel = require('../Modelos/usuarioModel');
const fs = require('fs');
const path = require('path');


exports.crearUsuario = async(req, res) => {
	try{
		let user = new userModel(req.body)
		await user.save()
		res.send(user)
	}catch(error){
		console.log('No se pudo acceder al usuario: ', error)
		res.status(500).send('Hubo un error')
	}
}
exports.obtenerUsuarios = async(req, res) => {
	try{
		const user = await userModel.find();
		res.json(user);

	}catch(error){
		console.log('No se pudo acceder al usuario: ', error)
		res.status(500).send('Hubo un error')
	}
}
exports.obtenerUsuario = async(req, res) => {
	try{
		let user = await userModel.findById(req.params.id)
		if(!user){
			res.status(404).json({msg: 'No existe el usuario'})
		} 

	}catch(error){
		console.log('No se pudo acceder al usuario: ', error)
		res.status(500).send('Hubo un error')
	}
}
exports.actualizarUsuarios = async(req, res) => {
	try{

	}catch(error){
		console.log('No se pudo acceder al usuario: ', error)
		res.status(500).send('Hubo un error')
	}
}
exports.actualizarUsuario = async(req, res) => {
	try{
		const { 
			userName,
			lastName,
			age,	
			email,
			telephone,
			password,
			photo,
			state,
			dni,
			isProfessor,
			subject,
			fechaCreación,
		} =req.body
		let user = await userModel.findById(req.params.id)
		if(!user){
			res.status(404).json({msg: 'No existe el usuario'})
		}
		user.userName = userName;
		user.lastName = lastName;
		user.age = age;
		user.email = email;
		user.telephone = telephone;
		user.password = password;
		user.photo = photo,
		user.state = state;
		user.dni = dni;
		user.isProfessor = isProfessor;
		user.subject = subject;
		user = await userModel.findOneAndUpdate({_id:req.params}, user, {new: true})
		res.json(user);
	}catch(error){
		console.log('No se pudo acceder al usuario: ', error)
		res.status(500).send('Hubo un error')
	}
}
exports.eliminarUsuarios = async(req, res) => {
	try{

	}catch(error){
		console.log('No se pudo acceder al usuario: ', error)
		res.status(500).send('Hubo un error')
	}
}
exports.eliminarUsuario = async(req, res) => {
	try{
		let user = await userModel.findById(req.params.id)
		if(!user){
			res.status(404).json({msg: 'No existe el usuario'})
		}
		await user.findOneAndRemove({_id: req.params.id})
		res.json({msg: 'Usuario eliminado con éxito'})
	}catch(error){
		console.log('No se pudo acceder al usuario: ', error)
		res.status(500).send('Hubo un error')
	}
}







// const controller = {
// 		home:function(req, res){
// 		return res.status(200).send({
// 			message: 'Soy la home'
// 		});
// 	},
// 	test:function(req, res){
// 		return res.status(200).send({
// 			message: 'Soy el metodo o accion test del controlador de user'
// 		});
// 	},

// 	saveUser:function(req, res){
// 		// const user = new userModel();
// 		const user = new userModel()
// 		const params = req.body;
// 		// user.username = params.name;
// 		user.name = params.name;
// 		user.description = params.description;
// 		user.category = params.category;
// 		user.year = params.year;
// 		user.langs = params.langs;
// 		user.image = null /*params.image*/;

// 		user.save((err, userStored) => {
// 			if(err) return res.status(500).sned({message: 'Error al guardar el documento'});
// 			if(!porjectStored) return res.status(404).send({message:'No se ha podido'});
// 			return res.status(200).send({user:userStored});
// 		});

// 	},


// 	getUser: function(req,res){
// 		var userId = req.params.id;

// 		if(userId == null) return res.status(404).send({message: 'El usuario no existe'});
		
// 		userModel.findById(userId,(err, user) => {
// 			if(err) return res.status(500).send({message: 'Error al devolver los datos'});
// 			if(!user) return res.status(404).send({message:'El usuario no existe'});
// 			return res.status(200).send({
// 				user
// 			});
// 		});
// 	},

// 	getUsers: function(req, res){
// 		userModel.find({}).sort('-year').exec((err,users) => {
// 			if(err) return res.status(500).send({message:'Error al devolver  los datos'});
// 			if(!projects) return res.status(404).send({message: 'No hay usuarios que mostrar.'});
// 			return res.status(200).send({projects});
// 		})
// 	},

// 	updateUser: function(req, res){
// 		var userId = req.params.id;
// 		var update = req.body;
// 		userModel.findByIdAndUpdate(userId, update, {new:true}, (err, userUbdated) => {
// 			if(err) return res.status(500).send({message:'Error al actualizar'});
// 			if(!userUbdated) return res.status(404).send({message:'No existe el usuario para acutalizar'});
// 			return res.status(200).send({
// 				user:userUbdated
// 			})
// 		})
// 	},

// 	deleteUser: function(req, res){
// 		var userId = req.params.id;

// 		userModel.findByIdAndRemove(userId, (err, userRemoved) =>{
// 			if(err) return res.status(500).send({message:'No se ha podido borrar el usuario'});
// 			if(!userRemoved) return res.status(404).send({message: 'No se puede eliminiar ese usuario'});
// 			return res.status(200).send({user: userRemoved});
// 		});
// 	},



// };
// module.exports = controller;








// const model = require('../models/user');
// const { param } = require('../routes/userRoutes');
// exports.getData = (req,res)=>{
// 	model.find({}, (err, docs)=>{
		
// 		res.send({
// 			docs:docs
// 		})

// 	})

// }