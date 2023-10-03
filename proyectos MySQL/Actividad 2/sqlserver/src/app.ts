import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import routerCursos  from './routes/CursoRoutes';
import routerUsers from './routes/UserRoutes';
import routerTareas from './routes/TareaRoutes';
import routerMensajes from './routes/MensajeRoutes';
import routerAdmins from './routes/AdminRoutes';

import sequelize from './config/connectdb';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.use(routerMensajes);
app.use(routerTareas);
app.use(routerCursos);
app.use(routerUsers);
app.use(routerAdmins);
app.listen(PORT, () => console.log(`Api conectada por el puerto ${PORT}`));

try {
    sequelize.authenticate();
    console.log('La conexión con la Base de Datos es correcta');
} catch (error){
    console.error('No se puede conectar con la base de datos', error);
}