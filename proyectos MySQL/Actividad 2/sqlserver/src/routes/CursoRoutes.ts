import { Router } from 'express'
import { deleteCurso, getCurso, getCursos, postCurso, updateCurso } from '../controllers/CursoController'

const routerCursos = Router();
routerCursos.get('/cursos/', getCursos);
routerCursos.get('/cursos/:id', getCurso);
routerCursos.delete('/cursos/:id', deleteCurso);
routerCursos.post('/cursos/', postCurso);
routerCursos.put('/cursos/:id', updateCurso);

export default routerCursos;

