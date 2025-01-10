import { useEffect, useState } from 'react';

import './App.css'
import { fetchData } from './services/API';
import { Crear } from './crear';

function App() {
  const [data, setData] = useState(null);

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

  


  return (
  <>
    <header>
      <h1>Task_Manager</h1>
      <button id='Post'>Crear tarea</button>
    </header>
    <div id="Tablero_tareas">
        {data ? (data.tareas.map((tarea) => (<div className="Tarea">
                <div className="Tarea_contenida" key={tarea._id}> 
                    <div className='Parte_arriba'>
                      <h2 className='Titulo_tarea'>{tarea.Titulo}</h2>
                      <div className='botones'>
                        <button className='boton' id='Put'>Modificar</button>
                        <button className='boton' id='Del'>Eliminar</button>
                      </div>
                    </div>
                    <p className="Descripcion_tarea">{`Descripcion: ${tarea.Descripcion}`}</p>
                    <p></p>
                </div>
            </div>))) : (<p>Cargando datos</p>)}
        </div>
    <Crear />
  </>
  )
}

export default App
