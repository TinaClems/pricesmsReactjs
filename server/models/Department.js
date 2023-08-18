const mongoose = require('mongoose');
const { Schema } = mongoose;

// 
const departmentSchema = new Schema({ 
name: String,
students:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
],
HOD: String,
Projects:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project"
}]
   
}, { timestamps: true });

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;
