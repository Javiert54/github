import { DataTypes } from 'sequelize';
import db from '../config/connectdb';

const User = db.define('User',{
    name: {
        type: DataTypes.STRING
    },
	lastName: {
		type: DataTypes.STRING
	},
    birthDate: {
        type: DataTypes.DATE
    },
    email: {
        type: DataTypes.STRING
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
	}
    ,registDate: {
        type: DataTypes.DATE
    }
    

}, {
    createdAt: false,
    updatedAt: false
});
 export default User;


