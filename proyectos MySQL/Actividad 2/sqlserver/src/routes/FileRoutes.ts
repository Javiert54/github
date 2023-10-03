import { Router } from 'express'
import { getFile } from '../controllers/FileController'


const routerFiles = Router();
// routerFiles.get('/files/', getFiles);


// routerFiles.get('/files/:id', getFile);


// routerFiles.delete('/files/:id', deleteFile);
routerFiles.post('/files/', getFile);
// routerFiles.put('/files/:id', updateFile);

export default routerFiles;

