var connection = require("./dbconnection");


module.exports.insert = function(data, result){
    sql.query("INSERT INTO user SET ?", data, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        console.log("created user ");
        result(null, {status:"created sucessfully"});
      });
 }

 module.exports.selectAll = result => {
  sql.query("SELECT * FROM user", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};



