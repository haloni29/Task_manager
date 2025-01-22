import { useState } from "react"

export const Actualizar = () => {
    const [id, setId] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [Data, setData] = useState({ Tarea: []})
    
    
    return(
        <>
            <form onSubmit={Actualizar}>
                <input id="Titulo" type="text" placeholder="Titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                <textarea id="Desc" placeholder="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                <button type="submit">crear nueva tarea</button>
            </form>
        </>
    )
}