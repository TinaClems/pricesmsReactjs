const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the userSchema
const userSchema = new Schema({ 
    email: {
        type: String,
        unique: true
    },
    password: String,
    userType: String,
    firstName: String,
    lastName: String,
    gender: String,
    set: String,
    studentId: String,
    lecturerId: String,
    contact: String, 
    dob: String,
    admissionYear: String,
    disciplersName: String,
    disciplersEmailAddress: String,
    disciplersContact: String,
    department: String,
    jd: String,
    subject: String,
    address: String,
    isVerified: Boolean,
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
