
import './css/App.css';
import Signup from './Signup';
import login from './Loginpage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {


  const linkStyle = {

  textDecoration: "none",
  color: 'white',
  float:'right',
  backgroundColor:'black',
  fontSize:'17px',
  padding: '12px 14px',
  textAlign:'center',
  margin:'4px',
  borderRadius:'6px'
  };
return(

 
  <Router>
 
<div className="home">
Hi User!
<Link to="/login"  style={linkStyle} >Login</Link>
<Link to="/Signup"  style={linkStyle}>Signup</Link>
</div>
<div className="wel">
<h2>Welcome</h2>
</div>

<Switch>

<Route path="/Signup" exact component={Signup}/>
<Route path="/login" exact component={login}/>

</Switch>



</Router>
);
  
}

export default App;
