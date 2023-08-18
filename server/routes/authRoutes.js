const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  registerStudent,
  registerLecturer,
  loginUser,
  getStudents,
  getStudentProfile,
  deleteStudent,
  deleteLecturer,
  getLecturers,
} = require("../controllers/authControllers");

// middleware
// router.use(
//     cors({
//         credentials: true,
//         origin:[
//             // 'http://localhost:5174',
//          'http://localhost:5173']
//     })
// )

//API endpoints
// router.get('/', test)
router.post("/register/student", registerStudent);
router.post("/register/lecturer", registerLecturer);
router.post("/login", loginUser);
router.get("/allStudents", getStudents);
router.get("/studentProfile", getStudentProfile);
router.delete("/deleteStudent", deleteStudent);
router.delete("/deleteLecturer", deleteLecturer);
router.get("/allLecturers", getLecturers);

module.exports = router;
