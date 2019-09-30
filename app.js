const express=require('express');
const bodyparser=require('body-parser');
const chalk=require('chalk');
const path=require('path');
const app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(express.static(path.join(__dirname,'/public')));
app.set('views',path.join(__dirname,'/src/views'));
app.set('view engine','ejs');

const nav=[
    {
        title:"Home",
        link:"/"
    },

    {
        title:"Valuation",
        link:"/admin/valuation"
    },
    {
        title:"Add Teacher",
        link:"/admin/addteacher"
    }
    
];
const AdminRouter=require('./src/routes/AdminRouter')([...nav]);
app.use('/admin',AdminRouter);
app.all('/',(req,res)=>{
    res.render('index',{
        nav
    })
})
app.listen('3000',()=>{
    console.log('server started at '+chalk.green(3000));
    
})