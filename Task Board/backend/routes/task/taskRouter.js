const { Router } = require("express");
const taskController = require('../../controllers/taskController')

const router = Router();

router.post("/mystasks",taskController.mysTasks);

router.post("/task",taskController.getTask);

router.post("/newtask",taskController.createTask);

router.put("/change",taskController.change);

router.delete("/deleteTask/:id",taskController.deleteTask);


module.exports = router