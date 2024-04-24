const sql = require("./db");

// constructor
const Attendance = function(attendance) {
  this.employee_id = attendance.employee_id;
  this.attendance_id = attendance.attendance_id;
  this.date = attendance.date;
  this.status = attendance.status;
};


Attendance.findById = (emploee_id, result) => {
  sql.query(`SELECT * FROM attendance WHERE employee_id = ${employee_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found attendance: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Attendance with the id
    result({ kind: "not_found" }, null);
  });
};

Attendance.getAll = (result) => {
  let query = "SELECT * FROM attendance";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("attendance: ", res);
    result(null, res);
    //result()
    //return result;
    //res.json(result)
    //result(null, res);
    return;
  });
};


Attendance.updateById = (employee_id, attendance, result) => {
  sql.query(
    "UPDATE attendance SET date = ?, status = ?,attendance_id = ? WHERE employee_id = ?",
    [attendance.date, attendance.status, attendance.attendance_id, employee_id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Attendance with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated attendance: ", { employee_id: employee_id, ...attendance });
      result(null, { employee_id: employee_id, ...attendance });
    }
  );
};


module.exports = Attendance;