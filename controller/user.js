
var dboperations = require("../database/queries");
module.exports.getAllUser = (req, res) => {
   
    dboperations.selectAll(function(err, data){
    if (err){
          res.status(500)
              res.json({
          message:
              err.message || " error occurred during creating the user."
          });}
      else{ res.status(200).
            res.json({"data":data}); 
            }
    });
    
}
module.exports.addUser = (req, res) => {

    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
      const user = {
        last_name:req.body.last_name,
        first_name:req.body.first_name,
        email: req.body.email,
        mobile_number: req.body.mobilenumber,
      };
     dboperations.insert(user, function(err, data){
            if (err){
            res.status(500)
               res.json({
            message:
                err.message || "error occurred while creating the user."
            });}
        else{ res.status(200).
              res.json({"data":data}); 
             }
     });
}


