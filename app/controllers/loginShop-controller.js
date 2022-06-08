const db = require("../db/mysql");
const bcrypt = require("bcryptjs");
const nJwt = require("njwt");
const config = require("../config/keys");

let login = (req, res) => {
  let nit = req.body.nit;
  let password = req.body.password;
  db.loginShop(req.body)
    .then((result) => {
      if (result.length > 0) {
        if (!bcrypt.compareSync(password, result[0].password)) {
          return res.status(401).json({
            status: "Authentication failed",
            auth: false,
          });
        }
        if (!result[0].state) {
          return res.status(401).json({
            status: "Account is not activated",
            auth: false,
            act: false,
          });
        }
      } else {
        return res.status(401).json({
          status: "Authentication failed",
          auth: false,
        });
      }

      // TOKEN
      let jwt = nJwt.create(
        { nit: nit },
        config.SIGNING_KEY
      );
      jwt.setExpiration(new Date().getTime() + 60 * 60 * 1000);
      let token = jwt.compact();
      return res.status(200).json({
        status: "Successful login",
        auth: true,
        token: token,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  login,
};
