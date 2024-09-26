

const thisTask = async (taskId) => {
    try {
        const res = await fetch('http://localhost:3000/tasks/task',{
            method:'POST',
            headers:{
                'Content-Type':'aplication/json'
            },
            body:JSON.stringify(taskId)
        });
        if(res.ok){
            const thisTask = res.json();
            return thisTask
        }
        return console.error(error);
    } catch (error) {
        console.error(error);
    }
}
export default thisTask;