const { Router } = require("express");
const userController = require('../../controllers/userController')

const router = Router();

router.get("/allusersnames",userController.getUserNames );

router.post("/myuser",userController.getMyUser);

router.post("/newuser",userController.createUser);

router.delete("/delete",userController.deleteUser);

module.exports = router
