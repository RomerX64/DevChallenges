const Task = require("../models/Task");
const User = require("../models/User")
module.exports ={
    createTask: async ({title, description, type, status, userId}) => {
        try {
        const user = await User.findById(userId)
        console.log('usuario: '+ user);
        
        if (!user){return console.error('el usuario no esta logeado');}

        console.log({title, description, type, status})

        const newTask = await new Task({title, description, type, status});
        
        console.log('task creada: '+ newTask);

        console.log(user.tasks)
        user.tasks.push(newTask._id);
        console.log(user.tasks)
        
        await newTask.save();  
        await user.save();

        console.log('La task se creo y agrego correctamente')
        return newTask;

        } catch (error) {
            return console.error('La task no se pudo subir al usuario'); 
        }   
    },
    getTask: async (taskId) =>{
        const task = await Task.findById(taskId)
        return task;
    },
    mysTasks: async (userId) => {
        const user = await User.findById(userId)
        const tasks = user.tasks
        return tasks;
    },
    deleteTask: async (taskId, userId) => {
        const user = await User.findById(userId)
        const task = await Task.findById(taskId)
        if(!task){return console.error('no se pudo identificar Task a eliminar')}
        try {
            await Task.findByIdAndDelete(taskId)
            await user.save();
            return console.log('Se borro Correctamente la Task '+ task.title +', ID: '+ taskId );  
        } catch (error) {
            return console.error('No se pudo eliminar la task '+ task.title +', ID: '+ taskId);   
        }
    },
    change: async({taskId, newTitle, newDescription, newType, newStatus}) => {
        const task = await Task.findById(taskId);
            if (!task) {
                console.log('Usuario o tarea no encontrados');
                return;
            }
        try {
            await Task.findByIdAndUpdate(taskId,{
                title: newTitle,
                description: newDescription,
                status: newType,
                type: newStatus,
                },
                { new: true }
            )
            await task.save();
            return console.log('Los cambios se realizaron con exito')
        } catch (error) {
            return console.log('No se pudieron realizar lo cambios', error)
        }
    }


}