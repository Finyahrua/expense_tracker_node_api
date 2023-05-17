const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  // Get the token from the request header
  const token = req.headers.authorization;
  const tokenWithoutPrefix = token.slice(7);


  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Verify and decode the token
  jwt.verify(tokenWithoutPrefix, "your_jwt_secret", (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ message: "Invalid tokennn" });
    }

    // Add the decoded token to the request object
    req.user = decodedToken;

    // Proceed to the next middleware
    next();
  });
};

module.exports = authenticateUser;
