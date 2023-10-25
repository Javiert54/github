import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Mensaje = sequelize.define('Mensaje',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    asunto: {
        type: DataTypes.STRING
    },
    mensaje: {
        type: DataTypes.TEXT
    }
}, {
    modelName: "mensaje",
    timestamps: false  
}
);

export default Mensaje;