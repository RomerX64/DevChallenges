
const actualizarTask = async (newTask,taskId) => {
    try {
        const response = await fetch('http://localhost:3000/tasks/change',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...newTask,taskId})
        }) 
        if(response.ok){
            return console.log('Se pudo actualizar la task');
        }
    } catch (error) {
        console.log(error);
    }
}
export default actualizarTask