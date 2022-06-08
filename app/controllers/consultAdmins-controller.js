const db = require("../db/mysql");

let consultAdmins = (req, res) => {
  db.consultAdmins(req.query)
    .then((result) => {
      console.log(result)
      return res.status(200).json({
        status: "Token ok",
        auth: true,
        admins: result,
      });
      
    })
    .catch((err) => {
      console.log("oe")
      console.log(err);
    });
};

module.exports = {
  consultAdmins,
};
