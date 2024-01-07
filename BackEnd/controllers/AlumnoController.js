import AlumnoModel from "../Model/AlumnoModel.js";

//mostrar alumno

export const getAllAlumno = async(req, res) => {
    try {
        const alumno = await AlumnoModel.findAll()
        res.json(alumno);
    } catch (error) {
        res.json({mesagge: error.mesagge})
    }
}

//crear un registro

export const createAlumno = async (req, res) => {
    try {
        await AlumnoModel.create(req.body)
        res.json({
            "massage":"Registro creado correctament"
        })
    } catch (error) {
        res.json({mesagge: error.mesagge})
    }
}

//Actualizar un registr

export const updateAlumno = async (req, res) => {
    try {
        await AlumnoModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({
            "massege":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({mesagge: error.mesagge})
    }
}