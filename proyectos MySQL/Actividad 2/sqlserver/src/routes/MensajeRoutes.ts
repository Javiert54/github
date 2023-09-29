import { Router } from 'express'
import { deleteMensaje, getMensaje, getMensajes, postMensaje, updateMensaje } from '../controllers/MensajeController'

const routerMensajes = Router();
routerMensajes.get('/mensajes/', getMensajes);
routerMensajes.get('/mensajes/:id', getMensaje);
routerMensajes.delete('/mensajes/:id', deleteMensaje);
routerMensajes.post('/mensajes/', postMensaje);
routerMensajes.put('/mensajes/:id', updateMensaje);

export default routerMensajes;

