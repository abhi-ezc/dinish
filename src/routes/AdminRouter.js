const express=require('express');
const mongoose=require('../db/connect');
const teacherData=require('../models/TeacherData');
const AdminRouter=express.Router();
function router(nav)
{
    AdminRouter.route('/addteacher').get((req,res)=>{
        res.render('addteacher',{
            nav
        });
    })

    AdminRouter.route('/addteacher').post((req,res)=>{
        let reqData=req.body;
        teacherData.find({$and:[{name:reqData.name},{subject:reqData.subject}]}).count().then((counts)=>{
            if(counts>0)
            {
                return res.send({
                    msg:'Teacher already Registered'
                })
            }
            else
            {
                let teacher=new teacherData(reqData);
                teacher.save().then((info)=>{
                    res.send(({
                        msg:'teacher successfully added'
                    }))
                })
            }
        })
        
    });

    AdminRouter.route('/valuation').get((req,res)=>{
        res.render('valuation',{
            nav
        })
    })
    
    return AdminRouter;
}
module.exports=router;