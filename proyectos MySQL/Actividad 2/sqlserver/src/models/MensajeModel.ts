import { DataTypes } from 'sequelize';
import db from '../config/connectdb';

const Mensaje = db.define('Mensaje',{
    sender: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    },
    sendDate: {
        type: DataTypes.DATE
    }

}, {
    createdAt: false,
    updatedAt: false
});
export default Mensaje;