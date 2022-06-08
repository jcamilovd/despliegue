const db = require("../db/mysql");

let deleteShop = (req, res) => {
  db.deleteShop(req.query)
    .then((result) => {
      return res.status(200).json({
        status: "Ok",
        delete: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  deleteShop,
};
