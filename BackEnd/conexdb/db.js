//conexion con la base de datos
import { Sequelize } from "sequelize";

const db = new Sequelize('alumno', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
 export default db;