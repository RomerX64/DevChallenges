const express = require("express");
const { Router } = require("express");
const userRouter = require("./user/userRouter");
const taskRouter = require("./task/taskRouter");

const router = Router();

router.use('/user', userRouter);
router.use('/tasks', taskRouter);   

    
module.exports = router;