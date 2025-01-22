import { useEffect, useState } from 'react';

import './App.css'
import { fetchData } from './services/API';
import { Crear } from './crear';

function App() {
  const [data, setData] = useState(null);
  const [actualizar, setActualizar] = useState(false)

  useEffect(() => {
    const getTarea = async () => {
      try{
        const result = await fetchData();
        setData(result);
      } catch (error){
        console.error('error al cargar los datos', error);
      }
    };
    getTarea();
  }, []);

  
  const agregarTarea = (nuevaTarea) => {
    setData((prevData) => ({
      ...prevData,
      tareas: [...prevData.tareas, nuevaTarea],
    }));
  };


  return (
  <>
    <header>
      <h1>Task_Manager</h1>
      <button id='Post'>Crear tarea</button>
    </header>
    <div id="Tablero_tareas">
        {data ? (data.tareas.map((tarea) => (<div className="Tarea" key={tarea._id}>
                <div className="Tarea_contenida" > 
                    <div className='Parte_arriba'>
                      <h2 className='Titulo_tarea'>{tarea.Titulo}</h2>
                      <div className='botones'>
                        <button className='boton' onClick={(e) => actualizar} id='Put'>Modificar</button>
                        <button className='boton' id='Del'>Eliminar</button>
                      </div>
                    </div>
                    <p className="Descripcion_tarea">{`Descripcion: ${tarea.Descripcion}`}</p>
                    <p></p>
                </div>
            </div>))) : (<p>Cargando datos</p>)}
        </div>
      <Crear onTareaCreada={tareaCreada} />
  </>
  )
}

export default App
