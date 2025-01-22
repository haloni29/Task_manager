export const fetchData = async () => {
    const response = await fetch('http://localhost:3000/api/tasks', {
        method: 'GET'
    });
    if(!response.ok){
        throw new Error('Error al obtener tareas')
    }
    return await response.json();
};


export const createData = async (titulo, descripcion) => {
    const response = await fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({Titulo: titulo, Descripcion: descripcion})
    });

    if(!response.ok){
        throw new Error('Error al crear la tarea')
    };

    return await response.json();
}

export const updateData = async (_id, titulo, descripcion) => {
    const response = await fetch(`http://localhost:3000/api/tasks/${_id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({Titulo: titulo, Descripcion: descripcion})
    })

    if(!response.ok){
        throw new Error('Error al actualizar la tarea')
    };
    alert('tarea actualizada')
    return await response.json();
}