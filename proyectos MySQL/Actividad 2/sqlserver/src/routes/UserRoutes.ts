import { Router } from 'express'
import { deleteUser, getUser, getUsers, postUser, updateUser } from '../controllers/UserController'

const routerUsers = Router();
routerUsers.get('/users/', getUsers);
routerUsers.get('/users/:id', getUser);
routerUsers.delete('/users/:id', deleteUser);
routerUsers.post('/users/', postUser);
routerUsers.put('/users/:id', updateUser);

export default routerUsers;

