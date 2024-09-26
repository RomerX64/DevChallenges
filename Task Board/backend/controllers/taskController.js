const catchAsync = require('../utils/catchAsync.js');
const Task = require('../models/Task.js')
const taskService = require('../services/taskService.js');
const User = require('../models/User.js');
const res = require('express/lib/response.js');


const createTask = async (req, res ) => {
    const {title, description, type, status, userId} = req.body;
    console.log('parametros' + {title, description, type, status, userId});
    const newTask = await taskService.createTask({title, description, type, status, userId});
    console.log('task Creada '+ newTask);
    res.status(200).json(newTask);
}
const getTask = async (req,res) => {  
    const {taskId} = req.body;
    const task = await taskService.getTask(taskId);
    res.status(200).json(task);
}
const mysTasks = async (req,res) => {
    const {userId} = req.body;
    const tasks = await taskService.mysTasks(userId);
    res.status(200).json(tasks);
}
const deleteTask = async (req, res) => {
    const {userId} = req.body;
    const { taskId } = req.params
    await taskService.deleteTask(taskId, userId);
    res.status(200).json('Se elimino la task')
}
const change = async (req, res) => { 
    const {taskId, newTitle, newDescription, newType, newStatus} = req.body;
    const newTask = await taskService.change({taskId, newTitle, newDescription, newType, newStatus});
    res.status(200).json(newTask)
}


module.exports ={
    createTask: catchAsync(createTask),
    getTask: catchAsync(getTask),
    mysTasks: catchAsync(mysTasks),
    deleteTask: catchAsync(deleteTask),
    change: catchAsync(change),
}