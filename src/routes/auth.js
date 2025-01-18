const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const users = []; // In-memory user storage

// Render Register Page
router.get("/register", (req, res) => {
  res.render("register");
});

// Handle Register
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.redirect("/login");
});

// Render Login Page
router.get("/login", (req, res) => {
  res.render("login");
});

// Handle Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);

  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.user = user; // Save user in session
    return res.redirect("/dashboard"); // Redirect to the dashboard
  } else {
    return res.render("login", { error: "Invalid username or password" });
  }
});

// Handle Logout
router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

module.exports = router;
