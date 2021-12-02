import axios from 'axios';
import './css/Signup.css';
import {useState} from 'react';


function Signup(){

const [input,setinput]=useState({
      Firstname:'',
      Lastname:'',
      Email:'',
      Mobile:'',
      Password:''

 

   })


   function handlechange(event){
    const {name,value} =event.target;


    setinput(prevInput=>{
      return{
        ...prevInput,
        [name]:value
      }
    })
   }


function handleclick(event){
  event.preventDefault();
  //console.log(input);

  const user={
    Firstname:input.Firstname,
      Lastname:input.Lastname,
      Email:input.Email,
      Mobile:input.Mobile,
      Password:input.Password
  }

  if(input.Firstname && input.Lastname && input.Email && input.Mobile && input.Password){
  axios.post('http://localhost:4000/newuser',user)
  .then(response=>{
    if(response.data=="1"){
      alert("User already exist! please login")
    }
    else{
      alert("User Registered Successfully")
    }
  })
  .catch(err=>{
    alert("Something Went Wrong!")
  })
  
}
else{
  alert("Please enter all fields!");
}

}


return (


    
    <div className="App">
     <div className="formbox">
        <h2>SIGNUP</h2>




        <div className="forminput">

        <form >  

        <div className="t1">
        <label>
            Firstname <input onChange={handlechange} value={input.Firstname}type="text" placeholder="Enter Firstname" name="Firstname"/>
          </label><br/>
          </div>

          <div className="t2">
          <label>
            Lastname <input onChange={handlechange} value={input.Lastname} type="text" placeholder="Enter Lastname" name="Lastname"/>
          </label><br/>
          </div>

          <div className="t3">
          <label>
            Email <input onChange={handlechange} value={input.Email} type="email" placeholder="Enter Email" name="Email"/>
          </label><br/>
          </div>

          <div className="t4">
          <label>
            Mobile <input onChange={handlechange} value={input.Mobile} type="number" placeholder="Enter Mobile Number" name="Mobile"/>
          </label><br/>
          </div>

          <div className="t5">
           <label>
             Password <input onChange={handlechange} value={input.Password} type="password" placeholder="Enter Password" name="Password"></input>
           </label>
          </div> <br/>

          <button onClick={handleclick} type="submit"> Submit</button>
          <p>Already have an account? Login now</p>
 
        </form>
        </div>
     </div>
    </div>
  
  );


}

export default Signup;