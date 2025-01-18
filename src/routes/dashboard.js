const express = require("express");
const authMiddleware = require("../middleware/auth"); // Middleware to protect the route
const router = express.Router();

// Protected Dashboard Route
router.get("/", authMiddleware, (req, res) => {
  res.render("dashboard", { user: req.session.user });
});

module.exports = router;
