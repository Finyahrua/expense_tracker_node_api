const jwt = require("jsonwebtoken");

// Sample payload
const payload = {
  userId: 123,
  username: "john.doe",
};

// Secret key for signing the token
const secret = "your_jwt_secret";

// Generate the token
const token = jwt.sign(payload, secret);

console.log("Generated Token:", token);
