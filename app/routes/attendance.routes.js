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