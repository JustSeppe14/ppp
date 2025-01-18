require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");

const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const homeRoutes = require("./routes/homepage");

const app = express();

// Middleware
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "src", "styles")));
app.use(bodyParser.urlencoded({ extended: true }));

// Configure express-session
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Use secret from .env
    resave: false,
    saveUninitialized: false,
  })
);

// Routes
app.use("/", authRoutes);
app.use("/", homeRoutes);
app.use("/dashboard", dashboardRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
