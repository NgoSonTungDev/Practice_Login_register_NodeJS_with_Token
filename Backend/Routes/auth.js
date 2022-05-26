const authControllers = require("../controllers/authController");
const middlewareController = require("../controllers/middlewareController");
const router = require("express").Router();

router.post("/register",authControllers.register)

router.post("/login",authControllers.loginUser)

router.post("/refresh",authControllers.requestRefreshToken)

router.post("/logout",middlewareController.verifyTokken,authControllers.userLogout)





module.exports = router;