// ./routes/index.js
const path = require(`path`);
const router = require(`express`).Router();
const apiRoutes = require(`./api`);

// API Routes
router.use(`/api`, apiRoutes);

// If we do not hit any of the API routes, then send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, `../client/build/index.html`));
});

module.exports = router;
