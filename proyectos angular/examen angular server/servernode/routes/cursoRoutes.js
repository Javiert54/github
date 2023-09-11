const express = require('express');
const CursoController = require('../controllers/CursoControllers');
const router = express.Router()


router.get('/homeCurso', CursoController.home);
router.post('/testCurso', CursoController.test);
router.post('/save-curso', CursoController.saveCurso);
router.get('/curso/:id?', CursoController.getCurso);
router.get('/cursos', CursoController.getCursos);
router.put('/curso/:id', CursoController.updateCurso);
router.delete('/curso/:id', CursoController.deleteCurso);

module.exports = router;




// const router = express.Router();

// const path = 'Curso';

// router.get(
// 	`/${path}`,
// 	controller.getData
// 	)

// module.exports = router;
