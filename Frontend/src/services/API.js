
export const fetchData = async () => {
    const response = await fetch('http://localhost:3000/api/tasks');
    if(!response.ok){
        throw new Error('Error al obtener tareas')
    }
    return await response.json();
};