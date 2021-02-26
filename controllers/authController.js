// authController.js
const db = require("../models");
const bcrypt = require("bcrypt");
const NUM_SALT_ROUNDS = 10;							// More rounds increases brute-force complexity

// https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
const CLIENT_ERROR_UNAUTHORIZED = 401;	// Implies semantically the user is unauthenticated
const INTERNAL_SERVER_ERROR	= 500;			// The server encountered an unexpected condition which prevented it from fulfilling the request.

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
			}).catch((err) => {
				console.log(err);
				res.status(INTERNAL_SERVER_ERROR).end();
			});
		})
	},
	loginUser: function(req, res) {
		// Assuming we are looking up users bu unique email address, get matching user
		db.User.findOne({email: req.body.email }).then(foundUser =>{
			// Hash the user's provided (POSTed) password
			// Compare the previously hashed and stored password
			bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
				if(result) {
					//FIXME: don't send back to the user.
					res.json(foundUser);
				} else {
					// Alert that the (username OR password) is incorrect
					res.status(CLIENT_ERROR_UNAUTHORIZED).end();
				}
			});
		}).catch((err) => {
			console.log(err);
			res.status(INTERNAL_SERVER_ERROR).end();
		})
	},
}