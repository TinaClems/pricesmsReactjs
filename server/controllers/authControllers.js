const User = require("../models/Users");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

// Register Lecturer endpoint /registerLacturer
const registerLecturer = async (req, res) => {
  // return console.log('lecturer data', req.body)
  try {
    const {
      email,
      password,
      userType,
      firstName,
      lastName,
      gender,
      set,
      contact,
      dob,
      department,
      jd,
      address,
      subject,
    } = req.body;

    if (!userType) {
      return res.json({
        error: "userType is required",
      });
    }
    // Check for a valid password
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters long",
      });
    }
    // Check email
    const exists = await User.findOne({ email: email });
    if (exists) {
      return res.json({
        error: "Email is already taken",
        exists,
      });
    }

    const hashedPassword = await hashPassword(password);
    // Create User in the database
    const user = await User.create({
      // lecturerId,
      email,
      password: hashedPassword,
      userType,
      firstName,
      lastName,
      gender,
      set,
      contact,
      dob,
      department,
      jd,
      subject,
      address,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.json({
      error: "Something went wrong",
      error,
    });
  }
};

// Register student endpoint /registerStudent
const registerStudent = async (req, res) => {
  try {
    const { 
      email,
      password,
      userType,
      firstName,
      lastName,
      gender,
      set,
      contact,
      dob,
      admissionYear,
      disciplersName,
      disciplersEmailAddress,
      disciplersContact,
    } = req.body;

    if (!userType) {
      return res.json({
        error: "userType is required",
      });
    }
    // Check for a valid password
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters long",
      });
    }
    // Check email
    const exists = await User.findOne({ email: email });

    if (exists) {
      console.log("Email is already taken");
      return res.json({
        error: "Email is already taken",
        exists,
      });
    }
//this function is to generate the student ID using the set and the numberof student in the database + 1
    async function genStudentID(set){
      const count = await User.find({userType:"student"}).exec();
      const studentCount = count.length +=1; 
      return `PC/${set}/0${studentCount}`
    }
    // call the funtion genStudentID to generate the studentId
    let studentId = await genStudentID(set);

//this function is to generate the lecturer ID using the set and the numberof student in the database + 1
    async function genLecturerID(set){
      const count = await User.find({userType:"lecturer"}).exec();
      const lecturerCount = count.length +=1; 
      return `PC/${set}/0${lecturerCount}`
    }
    // call the funtion genStudentID to generate the studentId
    let lecturerId = await genLecturerID(set);

    const hashedPassword = await hashPassword(password);
    // Create User in the database
    const user = await User.create({
      studentId,
      email,
      password: hashedPassword,
      userType,
      firstName,
      lastName,
      gender,
      set,
      contact,
      dob,
      admissionYear,
      disciplersName,
      disciplersEmailAddress,
      disciplersContact,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.json({
      error: "Something went wrong",
      error,
    });
  }
};

// Login API endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log("Received login request:", email, password);

    // Check if user exists
    const user = await User.findOne({ email });
    // console.log("Found user:", user);

    if (!user) {
      return res.status(401).json({
        error: "No user found",
      });
    }
    // Check if password matches
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          // console.log(token, user)
          res.cookie("token", token).json({ user, token });
        }
      );
    } else {
      res.status(401).json({
        error: "Passwords do not match",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Something went wrong",
      error,
    });
  }
};

// get Students
const getStudents = async (req, res) => {
  try {
    const students = await User.find({ userType: "student" });
    if (students) { 
      res.status(200).json({ students });
    }
    if (!students) {
      res.status(404).json({ error: "There are no students in the database" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// get Lecturers
const getLecturers = async (req, res) => {
  try {
    const lecturers = await User.find({ userType: "lecturer" });
    if (lecturers) { 
      res.status(200).json({ lecturers });
    }
    if (!lecturers) {
      res.status(404).json({ error: "There are no lecturers in the database" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// get profile
const getStudentProfile = async (req, res) => { 
  try {
    const studentId = req.query.id 
    const student = await User.findById({_id:studentId}).exec()
    // console.log(deletedStudent)
    if(student){
      // console.log("SERVER ACTION",student)
      return res.status(200).json({student})
    }
    if(!student){
      return res.status(404).json({error: "Student not found"})
      }
  } catch (error) {
    console.log(error.message);
  }
};

// get profile of the lecturer
const getLecturerProfile = async (req, res) => { 
  try {
    const lecturerId = req.query.id 
    const lecturer = await User.findById({_id:lecturerId}).exec()
    // console.log(deletedLecturer)
    if(lecturer){
      // console.log("SERVER ACTION",Lecturer)
      return res.status(200).json({lecturer})
    }
    if(!lecturer){
      return res.status(404).json({error: "Lecturer not found"})
      }
  } catch (error) {
    console.log(error.message);
  }
};

// delete Students
const deleteStudent = async (req, res) => {

  try {
    const studentId = req.query.id 
    const deletedStudent = await User.findByIdAndDelete({_id:studentId}).exec()
    // console.log(deletedStudent)
    if(deletedStudent){
      console.log("SERVER ACTION",deletedStudent)
      return res.status(200).json({deletedStudent})
    }
    if(!deletedStudent){
      return res.status(404).json({error: "Student not deleted"})
      }
  } catch (error) {
    console.log(error.message);
  }
}


// delete Lecturers
const deleteLecturer = async (req, res) => {

  try {
    const lecturerId = req.query.id 
    const deletedLecturer = await User.findByIdAndDelete({_id:lecturerId}).exec()
    // console.log(deletedLecturer)
    if(deletedLecturer){
      console.log("SERVER ACTION",deletedLecturer)
      return res.status(200).json(deletedLecturer) // Return deletedLecturer directly
    }
    if(!deletedLecturer){
      return res.status(404).json({error: "Lecturer not found"})
      }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server error" });

  }
}

module.exports = {
  // test,
  registerLecturer,
  registerStudent,
  loginUser,
  getStudentProfile,
  getStudents,
  deleteStudent,
  getLecturers,
  deleteLecturer,
};
