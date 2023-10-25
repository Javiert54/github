import express, { Application } from 'express';
import cors from 'cors';
import routesUser from './routes/user';
import routesCurso from './routes/CursoRoutes'
import { User } from './models/UserModel';
import Curso from './models/CursoModel'
import Mensaje from './models/MensajeModel'
import routerMensaje from './routes/MensajeRoutes'
import Post from './models/PostModel'
import routerPost from './routes/PostRoutes'
import Tarea from './models/TareasModel'
import routerTarea from './routes/TareaRoutes';
import Archivo from './models/storageModel'
import { routerFile } from './routes/StorageRoutes';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        })
    }

    routes() {
       
        this.app.use('/api/users', routesUser);
        this.app.use('/api/cursos', routesCurso);
        this.app.use('/api/mensajes', routerMensaje);
        this.app.use('/api/posts', routerPost);
        this.app.use('/api/tareas', routerTarea);
        this.app.use('/api/upload', routerFile);

    }

    middlewares() {
        // Parseo body
        this.app.use(express.json());
        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await User.sync()
            await Curso.sync()
            await Mensaje.sync()
            await Post.sync()
            await Tarea.sync()
            await Archivo.sync()
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;