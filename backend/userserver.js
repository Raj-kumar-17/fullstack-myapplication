const express=require('express');
const router=express.Router();
const schema=require('./dataschema.js');


router.route("/newuser").post((req,res)=>{

    const Firstname=req.body.Firstname;
    const Lastname=req.body.Lastname;
    const Email=req.body.Email;
    const Mobile=req.body.Mobile;
    const Password=req.body.Password;

    //validation
   schema.findOne({Email:Email},(err,user)=>{
        if(user){
            res.send("1");
        }else{
             const user =new schema({
        Firstname,
        Lastname,
        Email,
        Mobile,
        Password
    });
    
    user.save();
    res.send("0");
   

        }
    })

   
});


router.route("/LoginUser").post((req,res)=>{
     const Email=req.body.Email;
    const Password=req.body.Password;

    schema.findOne({Email:Email},(err,log)=>{
           if(log){
              schema.findOne({Password:Password},(err,log1)=>{

                  if(log1){
                    res.send("1")
                  }
                  else{
                    res.send("2")
                  }
              })
           }else{
              res.send("0")
           }


    })

    
})


module.exports=router;