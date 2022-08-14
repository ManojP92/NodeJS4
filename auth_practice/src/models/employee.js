const mongoose= require('mongoose');
const employeeSchema = new mongoose.Schema({
    id : {
        type: Number,
        unique: true,
        required : true
    },
    name :{
        type :String,
        required : true
        // uppercase : true
    },
    isReady : Boolean,
    tags : [String]
})

const Employee = mongoose.model('Employee', employeeSchema);
module.exports=Employee;