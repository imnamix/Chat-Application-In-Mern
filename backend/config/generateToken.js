const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'asasakkhdhjjjs', {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
