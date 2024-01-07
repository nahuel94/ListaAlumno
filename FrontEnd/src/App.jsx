import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Alumno from './ListAlumn';
import Crear from './CrearAlumn';
import AlumnoEdit from './EditAlumno';

function App() {
  
return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Alumno />}/>
            <Route path='/create' element={<Crear />} />
            <Route path='/edit/:id' element={<AlumnoEdit/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
