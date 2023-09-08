// res.send( { data: "Esto viene de Rutas" } )
const cursoModel = require('../models/cursoModel')
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

	saveCurso: function (req, res) {
		// const curso = new cursoModel();
		const curso = new cursoModel()
		const params = req.body;
		// curso.cursoname = params.name;
		curso.nombreCurso = params.name;
		curso.duracion = params.duracion;
		curso.descripcion = params.descripcion;


		curso.save((err, cursoStored) => {
			if (err) return res.status(500).sned({ message: 'Error al guardar el documento' });
			if (!porjectStored) return res.status(404).send({ message: 'No se ha podido' });
			return res.status(200).send({ Curso: cursoStored });
		});

	},


	getCurso: function (req, res) {
		var cursoId = req.params.id;

		if (cursoId == null) return res.status(404).send({ message: 'El curso no existe' });

		cursoModel.findById(cursoId, (err, curso) => {
			if (err) return res.status(500).send({ message: 'Error al devolver los datos' });
			if (!curso) return res.status(404).send({ message: 'El curso no existe' });
			return res.status(200).send({
				curso
			});
		});
	},

	getCursos: function (req, res) {
		cursoModel.find({}).sort('-year').exec((err, cursos) => {
			if (err) return res.status(500).send({ message: 'Error al devolver  los datos' });
			if (!projects) return res.status(404).send({ message: 'No hay cursos que mostrar.' });
			return res.status(200).send({ projects });
		})
	},

	updateCurso: function (req, res) {
		var cursoId = req.params.id;
		var update = req.body;
		cursoModel.findByIdAndUpdate(cursoId, update, { new: true }, (err, cursoUbdated) => {
			if (err) return res.status(500).send({ message: 'Error al actualizar' });
			if (!cursoUbdated) return res.status(404).send({ message: 'No existe el curso para acutalizar' });
			return res.status(200).send({
				curso: cursoUbdated
			})
		})
	},

	deleteCurso: function (req, res) {
		var cursoId = req.params.id;

		cursoModel.findByIdAndRemove(cursoId, (err, cursoRemoved) => {
			if (err) return res.status(500).send({ message: 'No se ha podido borrar el curso' });
			if (!cursoRemoved) return res.status(404).send({ message: 'No se puede eliminiar ese curso' });
			return res.status(200).send({ curso: cursoRemoved });
		});
	},



};
module.exports = controller;

