import { Router } from 'express'
import { deleteAdmin, getAdmin, getAdmins, postAdmin, updateAdmin } from '../controllers/AdminController'

const routerAdmins = Router();
routerAdmins.get('/admins/', getAdmins);
routerAdmins.get('/admins/:id', getAdmin);
routerAdmins.delete('/admins/:id', deleteAdmin);
routerAdmins.post('/admins/', postAdmin);
routerAdmins.put('/admins/:id', updateAdmin);

export default routerAdmins;

