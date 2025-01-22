import { useState } from "react"
import { createData, fetchData } from "./services/API"
import './Crear.css'

export const Crear = ({ onTareaCreada }) => {
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [Data, setData] = useState({ Tarea: []})

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const nuevaTarea = await createData(titulo, descripcion)
            const tareaCreada = (nuevaTarea) => {
                setData((prevData) => [...prevData, nuevaTarea]);
            };
            
            setTitulo('')
            setDescripcion('')
        }
        catch (error){
            console.error(error, 'err no se ha creado la tarea', error)
        }
    }

    

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input id="Titulo" type="text" placeholder="Titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                <textarea id="Desc" placeholder="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                <button type="submit">crear nueva tarea</button>
            </form>
        </>
    )

}