const sql = require('./db');

const Attendance = function (attendance) {
  this.attendance_id = attendance.attendance_id;
  this.employee_id = attendance.employee_id;
  this.date = attendance.date;
  this.status = attendance.status; 
};

// Add attendance record
Attendance.create = (newAttendance, result) => {
  const sqlQuery = `INSERT INTO attendance (attendence_id, employee_id, date, status)
                   VALUES (?, ?, ?)`;
  const values = [newAttendance.attendence_id,newAttendance.employee_id, newAttendance.date, newAttendance.status];

  sql.query(sqlQuery, values, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Added new attendance record: ", { id: res.insertId, ...newAttendance });
    result(null, { id: res.insertId, ...newAttendance });
  });
};

// Delete attendance record (assuming deletion by attendance_id)
Attendance.delete = (attendanceId, result) => {
  const sqlQuery = `DELETE FROM attendance WHERE attendance_id = ?`;
  const value = [attendanceId];

  sql.query(sqlQuery, value, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.affectedRows === 0) {
      result({ kind: "not_found" }, null); // Handle case where attendance_id not found
    } else {
      console.log("Attendance record deleted with ID:", attendanceId);
      result(null, res);
    }
  });
};

module.exports = Attendance;
