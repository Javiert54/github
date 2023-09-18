const messageModel = require('../models/messageModel')
const fs = require('fs');
const path = require('path');



const controller = {
	home: function (req, res) {
		return res.status(200).send({
			message: 'Soy la home'
		});
	},
	test: function (req, res) {
		return res.status(200).send({
			message: 'Soy el metodo o accion test del controlador de curso'
		});
	},

	saveMessage: function (req, res) {
		// const message = new messageModel();
		const message = new messageModel()
		const params = req.body;
		// message.messagename = params.name;
		message.email = params.email;
		message.password = params.password;
		message.textMessage = params.textMessage;


		message.save((err, messageStored) => {
			if (err) return res.status(500).sned({ message: 'Error al guardar el documento' });
			if (!porjectStored) return res.status(404).send({ message: 'No se ha podido' });
			return res.status(200).send({ message: messageStored });
		});

	},


	getMessage: function (req, res) {
		var messageId = req.params.id;

		if (messageId == null) return res.status(404).send({ message: 'El message no existe' });

		messageModel.findById(messageId, (err, message) => {
			if (err) return res.status(500).send({ message: 'Error al devolver los datos' });
			if (!message) return res.status(404).send({ message: 'El curso no existe' });
			return res.status(200).send({
				message
			});
		});
	},

	getMessages: function (req, res) {
		messageModel.find({}).sort('-year').exec((err, messages) => {
			if (err) return res.status(500).send({ message: 'Error al devolver  los datos' });
			if (!projects) return res.status(404).send({ message: 'No hay cursos que mostrar.' });
			return res.status(200).send({ projects });
		})
	},

	updateMessage: function (req, res) {
		var messageId = req.params.id;
		var update = req.body;
		messageModel.findByIdAndUpdate(messageId, update, { new: true }, (err, messageUbdated) => {
			if (err) return res.status(500).send({ message: 'Error al actualizar' });
			if (!messageUbdated) return res.status(404).send({ message: 'No existe el curso para acutalizar' });
			return res.status(200).send({
				message: messageUbdated
			})
		})
	},

	deleteMessage: function (req, res) {
		var messageId = req.params.id;

		messageModel.findByIdAndRemove(messageId, (err, messageRemoved) => {
			if (err) return res.status(500).send({ message: 'No se ha podido borrar el curso' });
			if (!messageRemoved) return res.status(404).send({ message: 'No se puede eliminiar ese curso' });
			return res.status(200).send({ message: messageRemoved });
		});
	},



};
module.exports = controller;

