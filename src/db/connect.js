const mongoose=require('mongoose');
const chalk=require('chalk');
mongoose.connect('mongodb://localhost:27017',(err)=>{
    if(err)
    console.log(chalk.red(err));
    else
    console.log(chalk.green('connected to DB'));
    
});
module.exports=mongoose;