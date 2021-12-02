const mongoose = require("mongoose");
const myschema=mongoose.Schema;


const userschema=new myschema({
	Firstname:{type:String,required:true},
	Lastname:{type:String,required:true},
	Email:{type:String,required:true},
	Mobile:{type:Number,required:true},
	Password:{type:String,required:true}
});


const newuser=mongoose.model('newuser',userschema);


module.exports=newuser;