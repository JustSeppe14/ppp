module.exports = (req, res, next) => {
  if (req.session.user) {
    next(); // User is authenticated, continue to the dashboard
  } else {
    res.redirect("/login"); // Redirect to login if not authenticated
  }
};
