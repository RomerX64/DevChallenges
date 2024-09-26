
const getMisTasks = async (userId)=>{
    try {
        const res = await fetch('http://localhost:3000/tasks/mystasks',{
            method:'POST',
            headers:{
                'Content Type':'aplication/json'
            },
            body:JSON.stringify(userId)
        })
        if(res.ok){
            return misTasks = res.json()
        }
        return console.error(error);
    } catch (error) {
        return console.log(error);
    }
}
export default getMisTasks;