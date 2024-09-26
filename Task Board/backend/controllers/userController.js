const catchAsync = require('../utils/catchAsync.js');
const userService = require('../services/userService.js');
const res = require('express/lib/response.js');

const createUser = async (req, res ) => {     
    console.log('createUser');
    console.log(req.body);
    
    const {userName, password, name, apellido, email} = req.body;

    const newUser = await userService.createUser({userName, password, name, apellido, email});
    res.status(200).json(newUser) ;
}
const getMyUser = async (req,res) => {
    console.log(req.body);
    
    const {userName, password} =  req.body;
    const user = await userService.getMyUser({userName,password});
    res.status(200).json(user);
}
const deleteUser = async (req, res,) => {
    const ID = req.body;
    if(!ID){res.status(400).json('Necesitas el id de tu cuenta')} 
    console.log(ID);
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