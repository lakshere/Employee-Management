const User = require("../models/user.model");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      // Create a User
      const user = new User({
        user_id : req.body.user_id,
        name : req.body.name,
        email : req.body.email,
        is_admin : req.body.is_admin  || false,
      });
    
      // Save User in the database
      User.create(user, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        else res.send(data);
      });
    
};