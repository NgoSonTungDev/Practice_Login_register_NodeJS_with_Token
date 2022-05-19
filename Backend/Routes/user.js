const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

const route = require("express").Router();

route.get("/alluser",middlewareController.verifyTokken, userController.getAllUSer)
route.delete("/:id",middlewareController.verifyTokkenAndAdmin,userController.deleteUser)


module.exports = route