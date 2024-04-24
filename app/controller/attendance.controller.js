const Attendance = require("../models/attendance.model");


// Retrieve all Attendance from the database (with condition).
exports.findAll = (req, res) => {
<<<<<<< HEAD
  const title = req.query.title;

=======
>>>>>>> cf6720fd783b1820dd15f9348d2dd47d59a0c37a
  Attendance.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
<<<<<<< HEAD
          err.message || "Some error occurred while retrieving tutorials."
=======
          err.message || "Some error occurred while retrieving Attendances."
>>>>>>> cf6720fd783b1820dd15f9348d2dd47d59a0c37a
      });
    else res.send(data);
  });
};

// Find a single Attendance with a id
exports.findOne = (req, res) => {
<<<<<<< HEAD
  Attendance.findById(req.params.employee_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Attendance with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Attendance with id " + req.params.id
=======
  Attendance.findById(req.params.attendance_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Not found Attendance with id " + req.params.attendance_id
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Attendance with id " + req.params.attendance_id
>>>>>>> cf6720fd783b1820dd15f9348d2dd47d59a0c37a
        });
      }
    } else res.send(data);
  });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }


  const attendance = new Attendance({
    attendance_id: req.body.attendance_id,
    employee_id: req.body.employee_id,
    date: req.body.date,
    status: req.body.status,
  });
  //Add attendance
  Attendance.create(attendance, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Attendance."
      });
    else res.send(data);
  });
  //delete attendance of an employee
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
    req.params.attendance_id,
    new Attendance(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: "Not found Attendance with id ${ req.params.id }."
          });
        } else {
          res.status(500).send({
            message: "Error updating Attendance with id " + req.params.attendance_id
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Attendance.remove(req.params.attendance_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found attendance with id ${req.params.attendance_id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete attendance with id " + req.params.attendance_id
        });
      }
    } else res.send({ message: `Attendance was deleted successfully!` });
  });
};


