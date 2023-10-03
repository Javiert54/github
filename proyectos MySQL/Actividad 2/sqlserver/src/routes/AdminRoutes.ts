import { Router } from 'express'
import { deleteAdmin, getAdmin, getAdmins, postAdmin, updateAdmin } from '../controllers/AdminController'

const routerAdmins = Router();
routerAdmins.get('/adminservices/', getAdmins);
routerAdmins.get('/adminservices/:id', getAdmin);
routerAdmins.delete('/adminservices/:id', deleteAdmin);
routerAdmins.post('/adminservices/', postAdmin);
routerAdmins.put('/adminservices/:id', updateAdmin);

export default routerAdmins;

