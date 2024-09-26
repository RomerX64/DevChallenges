const { Mongoose, default: mongoose } = require("mongoose");
const Task = require("./Task");

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },

    password:{
        type:String,
        required: true,
    },

    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],

})

const User = mongoose.model('User',userSchema)

module.exports = User