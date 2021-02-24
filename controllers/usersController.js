// ./controllers/positionsController.js
const db = require(`../models`);
const UNPROCESSABLE_ENTITY = 422;

// Defining methods for the usersController
module.exports = {
	findAll: function(req, res) {
		db.User.find(req.query)
			.sort({ date: -1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(UNPROCESSABLE_ENTITY).json(err));
	},
	findById: function(req, res) {
		db.User.findById(req.params.id)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(UNPROCESSABLE_ENTITY).json(err));
	},
	create: function(req, res) {
		db.User.create(req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(UNPROCESSABLE_ENTITY).json(err));
	},
	update: function(req, res) {
		db.User.findOneAndUpdate(
			{
				_id: req.params.id
			},
			req.body,
			{
				new: true,
			}
		).then((dbModel) => res.json(dbModel))
		.catch((err) => res.status(UNPROCESSABLE_ENTITY).json(err));
	},
	remove: function(req, res) {
		db.User.findById(
			{
				_id: req.params.id
			}
		).then((dbModel) => dbModel.remove())
		.then((dbModel) => res.json(dbModel))
		.catch((err) => res.status(UNPROCESSABLE_ENTITY).json(err));
	},
};