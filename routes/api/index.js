// ./routes/api/index.js
const router = require(`express`).Router();
const positionRoutes = require(`./positions`);
const authRoutes = require("./auth");

router.use(`/positions`, positionRoutes);
router.use(`/auth`, authRoutes);

module.exports = router;
