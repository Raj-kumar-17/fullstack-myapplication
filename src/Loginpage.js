import {useState} from 'react';
import './css/loginpage.css';

import axios from 'axios';



function Loginpage(){

const [val,setval]=useState({
	Email:'',
	Password:''
})


function handleChange(e){
  const {name,value}=e.target;

   setval(prevInput=>{
      return{
        ...prevInput,
        [name]:value
      }
    })
}


function handleClick(e){
	e.preventDefault();


	const UD={
		Email:val.Email,
		Password:val.Password
	}

	if(val.Email && val.Password){
		axios.post('https://full-stack-rahulform.herokuapp.com/login',UD)
		.then(res=>{
			if(res.data=="1"){
				alert("Login Successfull")
			}
			else if(res.data=="2"){
				alert("Invalid Password")
			}

			else {
				alert("Invalid Email")
			}
		})
		.catch(err=>{
         alert("Something Went Wrong!")
            })
	}

	else{
		alert("Please enter all fields")
	}
}

return(


<div className="log">

<div className="cont">
 <h2>Login</h2>
<div className="email">
 <label>Email</label>
 <input onChange={handleChange} value={val.Email} type="text" name="Email"/><br/><br/>
 </div>
 <label>Password</label>
 <input onChange={handleChange} value={val.Password} type="password" name="Password"/>

 <input onClick={handleClick} type="button" value="Login"/><p>New user? Register now</p>
</div>

 </div>




);



}

export default Loginpage;