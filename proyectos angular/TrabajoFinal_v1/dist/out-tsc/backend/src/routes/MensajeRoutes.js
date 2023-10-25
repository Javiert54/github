import { Router } from 'express';
import { deleteMensaje, getMensaje, getMensajes, postMensaje, updateMensaje } from '../controllers/MensajeController';
// import validateToken from '../services/validate-token';
const routerMensaje = Router();
routerMensaje.get('/', getMensajes);
routerMensaje.get('/:id', getMensaje);
routerMensaje.delete('/:id', deleteMensaje);
routerMensaje.post('/', postMensaje);
routerMensaje.put('/:id', updateMensaje);
export default routerMensaje;
//# sourceMappingURL=MensajeRoutes.js.map