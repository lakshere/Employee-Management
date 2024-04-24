// <<<<<<< HEAD
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

// <<<<<<< HEAD
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
//     if (res.length) {
//       console.log("found attendance: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found Attendance with the id
//     result({ kind: "not_found" }, null);
//   });
// };

// Attendance.getAll = (result) => {
//   let query = "SELECT * FROM attendance";

//   sql.query(query, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("attendance: ", res);
//     result(null, res);
//     //result()
//     //return result;
//     //res.json(result)
//     //result(null, res);
//     return;
//   });
// };


// Attendance.updateById = (employee_id, attendance, result) => {
//   sql.query(
//     "UPDATE attendance SET date = ?, status = ?,attendance_id = ? WHERE employee_id = ?",
//     [attendance.date, attendance.status, attendance.attendance_id, employee_id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // not found Attendance with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("updated attendance: ", { employee_id: employee_id, ...attendance });
//       result(null, { employee_id: employee_id, ...attendance });
//     }
//   );
// };


// module.exports = Attendance;
// >>>>>>> 973f93d99cf47d4d6df6111484e4bb65f53cb898














// // =======
// // const sql = require("./db");

// // // constructor
// // const Attendance = function(attendance) {
// //   this.employee_id = attendance.employee_id;
// //   this.attendance_id = attendance.attendance_id;
// //   this.date = attendance.date;
// //   this.status = attendance.status;
// // };


// // Attendance.findById = (emploee_id, result) => {
// //   sql.query(`SELECT * FROM attendance WHERE employee_id = ${employee_id}`, (err, res) => {
// // >>>>>>> 973f93d99cf47d4d6df6111484e4bb65f53cb898