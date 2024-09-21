const catchAsync = require('../utils/catchAsync.js');
const userService = require('../services/userService.js');
const res = require('express/lib/response.js');

const createUser = async (req, res ) => { 
    const {userName,name,apellido,email,password} = await req.body;
    const newUser = await userService.createUser({userName,name,apellido,email,password});
    res.status(200).json(newUser) ;
}

const getMyUser = async (req,res) => {
    const {userName,password} = await req.body;
    const user = await userService.getMyUser({userName,password});
    res.status(200).json(user);
}
const deleteUser = async (req, res,) => {
    const user = await req.user;
    const ID = user._id;
    await userService.deleteUser(ID);
    res.status(200).json()
}
const getUserNames = async (req, res) => {
    const namesEmails = await userService.getUserNames();
    res.status(200).json(namesEmails);
}

module.exports = {
    createUser: catchAsync(createUser),
    getMyUser: catchAsync(getMyUser),
    deleteUser: catchAsync(deleteUser),
    getUserNames: catchAsync(getUserNames)
}