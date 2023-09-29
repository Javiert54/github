import { DataTypes } from 'sequelize';
import db from '../config/connectdb';

const Tarea = db.define('Tarea',{
    title: {
        type: DataTypes.STRING
    },
    uploadDate: {
        type: DataTypes.DATE
    },
    description: {
        type: DataTypes.STRING
    },
    score: {
        type: DataTypes.NUMBER
    },
    state: {
        type: DataTypes.BOOLEAN
    },
    priority: {
        type: DataTypes.NUMBER
    },
	idCourse: {
		type: DataTypes.NUMBER
	},
    idUserAlu: {
        type: DataTypes.NUMBER
    },
	idUserProf:{
		type: DataTypes.NUMBER
	},
	submitState: {
		type: DataTypes.BOOLEAN
	},
	submitDate: {
		type: DataTypes.DATE
	}


    

}, {
    createdAt: false,
    updatedAt: false
});
export default Tarea;


