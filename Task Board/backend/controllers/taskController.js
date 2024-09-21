const catchAsync = require('../utils/catchAsync.js');
const Task = require('../models/Task.js')
const taskService = require('../services/taskService.js');
const User = require('../models/User.js');
const res = require('express/lib/response.js');


const createTask = async (req, res ) => {
    const user = req.user;
    const {tile, description, type, status } = req.body;
    const newTask = await taskService.createTask({tile, description, type, status},user);
    res.status(200).json(newTask);
}
const getTask = async (req,res) => {
    const user = req.user;
    const {title} = req.body;
    const task = await taskService.getTask({title},user);
    res.status(200).json(task);
}
const mysTasks = async (req,res) => {
    const user = req.user;
    const tasks = await taskService.mysTasks(user);
    res.status(200).json(tasks);
}
const deleteTask = async (req, res) => {
    const user = req.user;
    const {title} = req.body;
    await taskService.deleteTask({title});
    res.status(200).json(user.username + " se elimino su task")
}
const change = async () => {
    const user = req.user;
    const {newTitle, newDescription, newType, newStatus} = req.body;
    const newTask = await taskService.change({newTitle, newDescription, newType, newStatus},user);
    res.status(200).json(newTask)
}


module.exports ={
    createTask: catchAsync(createTask),
    getTask: catchAsync(getTask),
    mysTasks: catchAsync(mysTasks),
    deleteTask: catchAsync(deleteTask),
    change: catchAsync(change),
}