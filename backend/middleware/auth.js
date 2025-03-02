const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Get token from the header
  const token = req.header("Authorization");

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded.user;
    next(); // Proceed to the next middleware/route
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
