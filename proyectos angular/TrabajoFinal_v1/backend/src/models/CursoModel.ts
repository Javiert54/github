import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Curso = sequelize.define('Curso',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    categoria: {
        type: DataTypes.STRING
    },
    duracion: {
        type: DataTypes.INTEGER
    },
    temas: {
        type: DataTypes.STRING
    }
}, {
    modelName: "curso",
    timestamps: false  
}
);

export default Curso;