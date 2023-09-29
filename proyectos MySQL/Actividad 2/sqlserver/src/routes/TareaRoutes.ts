import { Router } from 'express'
import { deleteTarea, getTarea, getTareas, postTarea, updateTarea } from '../controllers/TareaController'

const routerTareas = Router();
routerTareas.get('/tareas/', getTareas);
routerTareas.get('/tareas/:id', getTarea);
routerTareas.delete('/tareas/:id', deleteTarea);
routerTareas.post('/tareas/', postTarea);
routerTareas.put('/tareas/:id', updateTarea);

export default routerTareas;