const express=require('express');
const mongoose=require('../db/connect');
const teacherData=require('../models/TeacherData');
const valuationData=require('../models/ValuationData');
const AdminRouter=express.Router();
const http=require('http');
function router(nav)
{
    AdminRouter.route('/addteacher').get((req,res)=>{
        res.render('addteacher',{
            nav,
            flag:null
        });
    })

    AdminRouter.route('/addteacher').post((req,res)=>{
        let reqData=req.body;
        teacherData.find({$and:[{name:reqData.name},{subject:reqData.subject}]}).count().then((counts)=>{
            if(counts>0)
            {
                res.render('addteacher',{
                    nav,
                    flag:0
                })
            }
            else
            {
                let teacher=new teacherData(reqData);
                teacher.save().then((info)=>{
                    res.render('addteacher',{
                        nav,
                        flag:1
                    })
                })
            }
        })
        
    });

    AdminRouter.route('/valuation').get((req,res)=>{
        let teacher=null;
        teacherData.find({}).then((data)=>{
            res.render('valuation',{
                nav,
                data
            })
        })
        
    })
    AdminRouter.route('/valuation/add').post((req,res)=>{
        let teacher=null;
        let val={
            student:req.body.student,
            teacher:{
                first:req.body.First,
                second:req.body.Second,
                third:req.body.Third
            }
        };
        let valuation=new valuationData(val);
        valuation.save();
        res.redirect('/admin/valuation')
        
    })
    
    return AdminRouter;
}
module.exports=router;