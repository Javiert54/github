import { DataTypes } from 'sequelize';
import db from '../config/connectdb';

const File = db.define('File', {

    FileName: {
        type: DataTypes.STRING
    },
	idUser: {
		type: DataTypes.NUMBER
	},
    path: {
        type: DataTypes.STRING
    }

}, {
    createdAt: false,
    updatedAt: false
});
export default File;
