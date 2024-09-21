const { Router } = require("express");
const taskController = require('../../controllers/taskController')

const router = Router();

router.get("/mystasks",taskController.mysTasks);

router.post("/task",taskController.getTask);
router.post("/newtask",taskController.createTask);
router.post("/change",taskController.change);

router.delete("/deleteTask",taskController.deleteTask);


module.exports = router