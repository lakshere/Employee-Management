const Attendance = require("../models/attendance.model");



// Retrieve all Attendance from the database (with condition).
exports.findAll = (req, res) => {
    const title = req.query.title;

    Attendance.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
};

// Find a single Attendance with a id
exports.findOne = (req, res) => {
    Attendance.findById(req.params.employee_id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Attendance with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Attendance with id " + req.params.id
            });
          }
        } else res.send(data);
      });
};


// Update a Attendance identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Attendance.updateById(
    req.params.employee_id,
    new Attendance(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Attendance with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Attendance with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};