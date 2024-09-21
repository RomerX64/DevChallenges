const Task = require("../models/Task");

module.exports ={
    createTask: async ({title, description, type, status}, user) => {
        const newTask = await Task({title, description, type, status});
        if(!newTask){return console.error('no se pudo crear la task')};
        if (!user){return console.error('el usuario no esta logeado');}
        try {
            const tasks = user.tasks;
            await tasks.push(newTask);
            await user.save() 
            return console.log('La task se creo y agrego correctamente');   
        } catch (error) {
            return console.error('La task no se pudo subir al usuario'); 
        }   
    },
    getTask: async ({title}, user) =>{
        const tasks = await user.tasks;
        const task = await tasks.find(task => task.title === title);
        return task;
    },
    mysTasks: async (user) => {
        const tasks = await user.tasks;
        const titles = [];
        for(let i=0 ; i < tasks.length ; i++){
            titles.push(tasks[i].title);
        };
        return titles;
    },
    deleteTask: async ({title},user) => {
        const tasks = await user.tasks;
        const task = await tasks.find(task => task.title === title);
        if(!task){return console.error('no se pudo identificar Task a eliminar')}
        const IDtaskAEliminar = task._id;
        if(!IDtaskAEliminar){return console.error('no se pudo identificar Task a eliminar')}
        try {
            user.tasks.pull(IDtaskAEliminar);
            await user.save;
            return console.log('Se borro Correctamente la Task '+ task.title +', ID: '+ IDtaskAEliminar );  
        } catch (error) {
            return console.error('No se pudo eliminar la task '+ task.title +', ID: '+ IDtaskAEliminar);   
        }
    },
    change: async({newTitle, newDescription, newType, newStatus}, user) => {
        const tasks = await user.tasks;
        const task = await tasks.find(task => task.title === title);
        if(!newTitle){return console.log('El titulo no esta definido')}
        if(!newDescription){return console.log('La descripcion no esta definido')}
        if(!newType){return console.log('EL tipo no esta definido')}
        if(!newStatus){return console.log('El estado no esta definido')}
        const changes = [newTitle, newDescription, newType, newStatus];
        const propiedades = [title, description, type, status]
        for(let i=0; i < propiedades.length;i++){
            task.propiedades[i] = changes[i];
        };
        try {
            await user.save();
            return console.log('Los cambios se realizaron con exito')
        } catch (error) {
            return console.log('No se pudieron realizar lo cambios')
        }
    }


}