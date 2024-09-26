


const taskCreate = async (newTask, userId) => {
    try {
        const response = await fetch('http://localhost:3000/tasks/newtask',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...newTask, userId})
        }) 
        if(response.ok){
            return console.log('Se creo, agrego y guardo correctamente su tarea');  
        }
        return console.error('No se pudo crear');
        
    } catch (error) {
        return console.error(error);
    }
}

export default taskCreate;