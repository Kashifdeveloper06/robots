const database = require("../connection");
exports.c_robotsdetail= (req, res) => {
    database.query(`SELECT * FROM  robotmarket.robotdetail`, (err, result) => {
      if (err) {
        console.log(err.message);
      } else {
        res.send(result);
      }
    });
  }