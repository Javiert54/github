import { DataTypes } from 'sequelize';
import db from '../config/connectdb';

const Admin = db.define('Admin',{
    name: {
        type: DataTypes.STRING
    }

}, {
    createdAt: false,
    updatedAt: false
});
 export default Admin;