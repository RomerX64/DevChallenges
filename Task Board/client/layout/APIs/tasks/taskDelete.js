

const taskDelete = async (taskId) => {

    try {
        const req = await fetch(`http://localhost:3000/tasks/deleteTask/${taskId}`,{
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        })
        if(req.ok){
            let view = document.getElementById('board');
                view.remove()
            return console.log('La task se elimino correctamente');
            
        }
    } catch (error) {
        console.error(error);
        return;
    }
    
}
export default taskDelete