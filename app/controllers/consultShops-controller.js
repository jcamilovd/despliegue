const db = require("../db/mysql");

let consultShops = (req, res) => {
  db.consultShops(req.query)
    .then((result) => {
      return res.status(200).json({
        status: "Token ok",
        auth: true,
        shops: result,
      });
    })
    .catch((err) => {
      console.log("oe")
      console.log(err);
    });
};

module.exports = {
  consultShops,
};
