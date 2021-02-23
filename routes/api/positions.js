// ./routes/api/position.js
const router = require(`express`).Router();
const positionsController = require(`../../controllers/positionsController`);

// Matches with "/api/positions"
router.route(`/`)
	.get(positionsController.findAll)
	.post(positionsController.create);

router.route(`/:id`)
	.get(positionsController.findById)
	.put(positionsController.update)
	.delete(positionsController.remove);

	module.exports = router;