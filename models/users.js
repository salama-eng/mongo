const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student_schema = new Schema({
    name:{
        type:String,
        unique:true,
        required: true,
    },
    email:{
        type:Number,
        required: true,
        unique:true,
    },
   
});

const users = mongoose.model("users", student_schema);
module.exports = users;