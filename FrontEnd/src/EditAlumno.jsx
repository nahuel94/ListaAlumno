import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
//use param devuelve lo que hay en la Url actalmente

const URL = 'http://localhost:8000/alumno/'

const AlumnoEdit = () => {
  const [alumno, setAlumno] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();
  //console.log(URL+id)

  const update = async (e) => {
    e.preventDefault()
    await axios.put(URL+id,{
      nombre: alumno
    })
    navigate('/')
  }


  useEffect(
    () => {
      getAlumnoId()
    },[]
  )

  const getAlumnoId = async () => {
    await axios.get(URL)
    .then(res => setAlumno(res.data[id].nombre))
    
    /* .catch(error => console.log(error)) */
  };

  return (
    /* console.log('editar alumno')
            console.log(param) */

    <div>
      <h3>Editar Alumno</h3>
      <form onSubmit={update}>
        <div>
          <label>Nombre</label>
          <input value={alumno}
          onChange={(e) => setAlumno(e.target.value)}></input>
          <button type="submit">
            cambiar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AlumnoEdit;
