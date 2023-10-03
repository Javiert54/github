import { DataTypes } from 'sequelize';
import db from '../config/connectdb';

const UserModel = db.define('User',{
    name: {
        type: DataTypes.STRING
    },
	lastName: {
		type: DataTypes.STRING
	},
    password: {
        type: DataTypes.STRING
    },
    birthDate: {
        type: DataTypes.DATE
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    imagen: {
        type: DataTypes.STRING
    },
    subjects: {
        type: DataTypes.STRING
    },
    telephone: {
        type: DataTypes.STRING
    },
	isProfessor: {
		type: DataTypes.BOOLEAN
	},
    registDate: {
        type: DataTypes.DATE
    },
    AsignedCourses: {
        type: DataTypes.STRING
    }
    

}, {
    createdAt: false,
    updatedAt: false
});
export default UserModel;
