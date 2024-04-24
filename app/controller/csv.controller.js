const csv = require("../models/csv.model");


// Retrieve Attendance monthly.
exports.attndstatus = (req, res) => {
  csv.write((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Attendance status."
      });
    else res.send(data);
  });
};