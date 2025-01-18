const express = require("express");
const router = express.Router();

// Homepage Route
router.get("/", (req, res) => {
  res.render("homepage"); // Render the homepage view
});

module.exports = router;
