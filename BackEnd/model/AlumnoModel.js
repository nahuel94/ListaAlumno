import db from "../conexdb/db.js";
import { DataTypes } from "sequelize";

const AlumnoModel = db.define('nota', {
    mate:{
        type: DataTypes.INTEGER
    },
    lengua:{
        type: DataTypes.INTEGER
    },
    promedio:{
        type: DataTypes.INTEGER
    },
    nombre:{
        type: DataTypes.STRING
    }
});

export default AlumnoModel;