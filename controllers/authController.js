// authController.js
const db = require("../models");
const bcrypt = require("bcrypt");
const NUM_SALT_ROUNDS = 8;

// Defining methods for authController
module.exports = {
	createNewUser: function(req, res) {
		const userToCreate = {
			email: req.body.email,
		}
		bcrypt.hash(req.body.password, NUM_SALT_ROUNDS, (err, hashedPassword) => {
			if(err) throw new Error(err);
			console.log(hashedPassword);
			userToCreate.password = hashedPassword;
			db.User.create(userToCreate).then((newUser) => {
				// FIXME: Don't send back to the user
				res.json(newUser);
			});
		})
	},
	loginUser: function(req, res) {},
}