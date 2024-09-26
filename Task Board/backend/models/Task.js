const { Mongoose, default: mongoose } = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        required: true, 
    },
    type: {
        type: String,
        enum: ['work', 'relax', 'study', 'outSide', 'train', 'time'], 
    },
    status: {
        type: String,
        enum: ['Pending', 'In progres', 'Completed', "wont'do"], 
        required: true, // Campo obligatorio
    },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;