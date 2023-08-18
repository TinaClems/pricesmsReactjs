const mongoose = require('mongoose');
const { Schema } = mongoose;

// 
const projectSchema = new Schema({
    title: String,
    description: String,
    student:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    supervisor: String,
    Department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    }
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
