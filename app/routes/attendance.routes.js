<<<<<<< HEAD
const express = require('express')
const AttendanceRouter = express.Router()
const AttendanceController = require('../controller/attendance.controller.js')

//get one employee attendance
AttendanceRouter.get("/", AttendanceController.update)

//update employee attendance
AttendanceRouter.patch("/:id");

//create employee attendance
AttendanceRouter.post("/", AttendanceController.update); 
// where isi the add attendance controller >

//delete 1 employee attendance
// AttendanceRouter.delete("/:employee_id", AttendanceController.);



module.exports = AttendanceRouter
// export { AttendanceRouter };
// =======
// module.exports = app => {
//     const attendance = require("../controller/attendance.controller.js");
  
//     var router = require("express").Router();
  
  
//     // Retrieve all Attendance
//     router.get("/", attendance.findAll);
  
  
//     // Retrieve a single attendance with id
//     router.get("/:employee_id", attendance.findOne);
  
//     // Update a attendance with id
//     router.put("/:employee_id", attendance.update);
  
  
//     app.use('/api/attendance', router);
//   };
// >>>>>>> 973f93d99cf47d4d6df6111484e4bb65f53cb898
=======

module.exports = app => {
  const attendance = require("../controller/attendance.controller.js");

  var router = require("express").Router();

  // Retrieve all Attendance
  router.get("/", attendance.findAll);

  // Retrieve a single attendance with id
  router.get("/:attendance_id", attendance.findOne);

  router.post("/", attendance.create);
  // Update a attendance with id
  router.put("/:attendance_id", attendance.update);

  router.delete("/:attendance_id", attendance.delete);

  app.use('/api/attendance', router);
};

>>>>>>> cf6720fd783b1820dd15f9348d2dd47d59a0c37a
