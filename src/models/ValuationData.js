const mongoose=require('../db/connect');
var Schema=mongoose.Schema;
var newValuationSchema=new Schema({
    student:String,
    Teacher:{
        first:String,
        second:String,
        thrid:String
    }
});

var valuation=mongoose.model('valuation-data',newValuationSchema);
module.exports=valuation;