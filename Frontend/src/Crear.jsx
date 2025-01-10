import { useState } from "react"
import { createData } from "./services/API"
import './Crear.css'

export const Crear = () => {
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [Data, setData] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const nuevaTarea = await createData(titulo, descripcion)
            setData((prevData) => ({
                ...prevData,
                Tarea: [...prevData.Tarea, nuevaTarea]
            }));
            setTitulo('')
            setDescripcion('')
        }
        catch (error){
            console.error(error, 'err no se ha creado la tarea')
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