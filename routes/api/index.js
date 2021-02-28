// ./routes/api/index.js
const router = require(`express`).Router();
const positionRoutes = require(`./positions`);
const authRoutes = require(`./auth`);
const userRoutes = require(`./users`);

router.use(`/positions`, positionRoutes);
router.use(`/auth`, authRoutes);
router.use(`/users`, userRoutes);

module.exports = router;
