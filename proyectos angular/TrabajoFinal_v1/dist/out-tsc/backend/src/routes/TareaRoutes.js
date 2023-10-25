import { Router } from 'express';
import { deleteTarea, getTarea, getTareas, postTarea, updateTarea } from '../controllers/TareaController';
// import validateToken from '../services/validate-token';
const routerTarea = Router();
routerTarea.get('/', getTareas);
routerTarea.get('/:id', getTarea);
routerTarea.delete('/:id', deleteTarea);
routerTarea.post('/', postTarea);
routerTarea.put('/:id', updateTarea);
export default routerTarea;
//# sourceMappingURL=TareaRoutes.js.map