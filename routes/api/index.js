// ./routes/api/index.js
const router = require(`express`).Router();
const positionRoutes = require(`./positions`);

router.use(`/positions`, positionRoutes);

module.exports = router;
