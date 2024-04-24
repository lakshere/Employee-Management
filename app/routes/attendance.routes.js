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