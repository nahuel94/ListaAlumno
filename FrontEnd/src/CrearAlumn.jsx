import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./tabla.css";

const URL = 'http://localhost:8000/alumno/';

const Crear = () => {
    const [nombre, setNombre] = useState('');
    const navigate = useNavigate();

    const guardarAlumn = async (e) =>{
        e.preventDefault()
        await axios.post(URL,{nombre: nombre})
        navigate('/')//redirecciona a la pagina principal
    }

    return(
        <div>
            <h1>Crear Alumno</h1>
            <form onSubmit={guardarAlumn}>
                <label>Nombre</label>
                <input 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <button type="submit">guardarAlumn</button>
            </form>
        </div>
    );
}
export default Crear;