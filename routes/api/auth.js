// ./routes/api/auth.js
const router = require('express').Router();
const {
	createNewUser,
	loginUser
} = require("../../controllers/authController");


router.route("/signup").post(createNewUser);

// this route is currently authenticating using the user email address
router.route("/login").post(loginUser);

module.exports = router;
