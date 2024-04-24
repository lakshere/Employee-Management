const Employees = require("../models/attendance.model");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

//Add attendance

app.post('/attendance', (req, res) => {
  // Extract data from request body
  const { employee_id, date, status } = req.body;

  // Create a new Attendance object
  const newAttendance = new Attendance({
    employee_id,
    date,
    status,
  });

  // Save attendance in the database
  Attendance.create(newAttendance, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send({
        message: err.message || "Some error occurred while adding attendance."
      });
    }

    console.log("Attendance added successfully:", data);
    res.status(201).send({ message: "Attendance added successfully!", data }); 
  });
});

//delete attendance of an employee

Attendance.delete(attendanceId, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send({
        message: err.message || "Some error occurred while deleting attendance."
      });
    }

    if (data.affectedRows === 0) {
      // Handle case where attendance_id not found
      return res.status(404).send({ message: `Attendance with ID ${attendanceId} not found.` });
    }

    console.log("Attendance deleted successfully with ID:", attendanceId);
    res.send({ message: "Attendance deleted successfully!" });
  });
};