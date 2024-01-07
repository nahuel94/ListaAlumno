import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const URL = 'http://localhost:8000/alumno/';


  /*  const Alumno = () => {
    const [alumno, setAlumno] = useState([])
    useEffect(
      () => {
        getAlumno();
      },[]

    )
    
    //Mostrar alumno
      
    const getAlumno = async () => {
      const res = await axios.get(URI);
      setAlumno(res.data);
      console.log(res);
      //console.log(setAlumno);
      //console.log( alumno);
    }

     const listAlumno = alumno.map(alum => 
        <li key={alum.id}>
          {alumno.nombre}
        </li>
      );
    return(
      <ul>{listAlumno}</ul>
    ); 
  }  */
 

  const Alumno = () => {
    const [alumno, setAlumno] = useState([]);

    useEffect(() => {
      /* axios.get(URL)
      .then(response => setAlumno(response.data))
      .catch(error => console.log(error)) */
      getAlumno()
    },[]);
    const getAlumno = async () => {
       await axios.get(URL)
      .then(resp => setAlumno(resp.data))
      .catch(error => console.log(error))
      //console.log(setAlumno);
      //console.log( alumno);
    }
    console.log(alumno)

    const lisAlumno = alumno.map((alum) => (
      <tr>
        <td>
          <Link to={`/edit/${alum.id}`}>{alum.nombre}</Link>
        </td>
        <td>{alum.lengua}</td>
        <td>{alum.mate}</td>
        <td>{alum.promedio}</td>
      </tr>
    ));
    return (
      <>
      <div>
        <h1>Hola</h1>
      </div>
        <div className="tablita">
          <table>
            {/*  <caption>Calificacion de los alumnos</caption> */}
            <thead>
              <tr id="pos">
                <th>Estudiante</th>
                {/* <th colspan="3">Calificacion</th> */}
                <th colspan="1">Lengua</th>
                <th colspan="1">Matematica</th>
                <th colspan="1">Promedio</th>
              </tr>
            </thead>
            <tbody>{lisAlumno}</tbody>
          </table>
        </div>
        <div>
          <Link to="/create">
            <button>crear</button>
          </Link>
        </div>
      </>
    );
  }

  export default Alumno;