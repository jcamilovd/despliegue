const db = require("../db/mysql");

let updateShop = (req, res) => {
  db.updateShop(req.body)
    .then((result) => {
      return res.status(200).json({
        status: "Report modified successfully",
        mod: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  updateShop,
};