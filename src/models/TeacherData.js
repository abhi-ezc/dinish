const mongoose=require('../db/connect');
let Schema=mongoose.Schema;
var newTeacherData=new Schema({
    name:String,
    subject:String
});
const teacher=mongoose.model('teacher-data',newTeacherData);
module.exports=teacher;