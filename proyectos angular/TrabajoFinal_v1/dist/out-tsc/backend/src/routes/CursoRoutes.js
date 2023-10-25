import { Router } from 'express';
import { deleteCurso, getCurso, getCursos, postCurso, updateCurso } from '../controllers/CursoController';
// import validateToken from '../services/validate-token';
const router = Router();
router.get('/', getCursos);
router.get('/:id', getCurso);
router.delete('/:id', deleteCurso);
router.post('/', postCurso);
router.put('/:id', updateCurso);
export default router;
//# sourceMappingURL=CursoRoutes.js.map