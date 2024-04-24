const User = require("../models/user.model");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const user = new User({
    user_id: req.body.user_id,
    name: req.body.name,
    email: req.body.email,
    is_admin: req.body.is_admin || false,
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

// Retrieve all users from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employee details."
      });
    else res.send(data);
  });
};

// Find a single user with a id
exports.findOne = (req, res) => {
  User.findById(req.params.user_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with id ${req.params.user_id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving user with id " + req.params.user_id
        });
      }
    } else res.send(data);
  });
};

//Update a single user with an id
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  User.updateById(
    req.params.id,
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};
// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  User.remove(req.params.user_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with user_id ${req.params.user_id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with id " + req.params.user_id
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};

