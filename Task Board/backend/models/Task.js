const { status } = require("express/lib/response");
const { Mongoose, default: mongoose } = require("mongoose");

const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    type: String,
    status:['Pending','In progres','Completed', "wont'do"]
});

module.exports = taskSchema