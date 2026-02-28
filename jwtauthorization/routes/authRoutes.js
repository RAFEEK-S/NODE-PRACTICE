const express = require("express");
const {registerUser,logInUser,getUserInfo} = require("../controllers/authController")
const authMiddleware = require("../middleware/authMiddleware")
const router = express.Router();


router.post("/register", registerUser);

router.post("/login", logInUser);

router.get("/user",authMiddleware,getUserInfo);

module.exports = router;