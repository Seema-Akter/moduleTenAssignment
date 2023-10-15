
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  let Token = req.headers['token'];

  jwt.verify(Token, "1234-XYZ", function(err, decoded) {
    if (err) {
      console.log('Error in token verification:', err);
      res.status(401).json({ status: "unauthorized" });
    } else {
      let email = decoded['data'];
      console.log('Decoded email:', email);
      req.header.email = email;
      next();
    }
  });
};
