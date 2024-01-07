//importamos la conexion a la db
import db from "./conexdb/db.js";
import express from 'express';
//importamos las rutas
import blogRoutes from './routes/routes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/alumno', blogRoutes);

try {
    await db.authenticate()
    console.log('Conexion exitosa a la db');
} catch (error) {
    console.log('Error de conexion: ' + error);
}

app.listen(8000, () => {
    console.log('Server conectado http://localhost:8000/')
})