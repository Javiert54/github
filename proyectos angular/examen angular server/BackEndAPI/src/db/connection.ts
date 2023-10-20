import { Sequelize } from "sequelize";
const sequelize = new Sequelize('nuevabase', 'root', 'Password123*', {
    host: 'localhost',
    dialect: 'mysql',   
});
export default sequelize;