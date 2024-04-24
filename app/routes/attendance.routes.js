<<<<<<< HEAD
import { Router } from "express";
import { AttendanceController } from "../Controllers/attendance.controller.js";

const AttendanceRouter = Router();

//get one employee attendance
AttendanceRouter.get("/", )

//update employee attendance
AttendanceRouter.patch("/:id");

//create employee attendance
router.post("/", Attendance.create);

//delete 1 employee attendance
router.delete("/:employee_id", Attendance.delete);




export { AttendanceRouter };
=======
module.exports = app => {
    const attendance = require("../controller/attendance.controller.js");
  
    var router = require("express").Router();
  
  
    // Retrieve all Attendance
    router.get("/", attendance.findAll);
  
  
    // Retrieve a single attendance with id
    router.get("/:employee_id", attendance.findOne);
  
    // Update a attendance with id
    router.put("/:employee_id", attendance.update);
  
  
    app.use('/api/attendance', router);
  };
>>>>>>> 973f93d99cf47d4d6df6111484e4bb65f53cb898
