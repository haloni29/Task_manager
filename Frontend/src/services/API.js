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
        throw new Error('Error al crear tareas')
    };

    return await response.json();
}