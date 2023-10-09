import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const User = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    Fnacimiento: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING
    },
    cursosAsignados:{
        type: DataTypes.STRING
    },
    isProfessor: {
        type: DataTypes.BOOLEAN
    }
}, {
    createdAt: false,
    updatedAt: false
}
 )