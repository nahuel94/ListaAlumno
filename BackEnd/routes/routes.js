import express from 'express';
import {createAlumno, getAllAlumno, updateAlumno} from '../controllers/AlumnoController.js';

const router = express.Router();

router.get('/', getAllAlumno);
router.post('/', createAlumno);
router.put('/:id', updateAlumno);
export default router;