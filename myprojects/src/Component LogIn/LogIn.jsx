import React, {useState} from "react"
import "./LogIn.css";
import {Link} from "react-router-dom"

const LogIn =()=>{

  const initialvalues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialvalues);
  console.log(initialvalues);
 
const handleChange = (e) =>{
  const {name, value} = e.target;
  setFormValues({ ...formValues, [name]: value});
  console.log(formValues);
};



const handleSubmit = (e) => {
  e.preventDefault();
  if (formValues.email === ""  || formValues.email === "" || formValues.password === "") {
    alert("please ensure your inputs are filled correctly");
    return true;
  } else {
    alert("You have successfully Logged in");
    window.location.reload();
  }
};




 

    return(

        <div className="BgLog">

        <div className="LogleftSignup">
              <div className="LogforballPic">
                <img src="./src/Ball.png" alt="BALLIMG" />
              </div>
              <div className="LogTextElite">
                    <p>ELITE </p>
                    <p>FOOTBALL</p>
              </div>
                <p className='LogcText'>"Where the best are revealed"</p>
          </div>
          <div className="LogRightSignup">
            <div className="LogLogo">
            <div className="LogcircleLogo">
             <img src="./src/proIcon.png" alt="icon" />
               </div>
            </div>
                   <div className="LogInputContainer">
                <div className="LogInputContainerWrap">
                  <div className="headLog"><p>Log in</p></div>
                  <form onSubmit={handleSubmit} className="forInputContain">
   
                  <div className="forInputLog">
                <label > Username</label>
                
                <input type="text" name="username"
                pattern="/^[a-zA-Z]+[a-zA-Z0-9] (_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/"
                value={formValues.username}
                 onChange={handleChange} />
               
                </div>
                <div className="forInputLog">
                <label >Email</label>
                <input type="text" name="email"
                   pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                value={formValues.email} onChange={handleChange} />
                
                </div>
                 <div className="forInputLog">
                <label >Password</label>
                <input type="text" name="password" 
                 pattern=".{8,}"
                value={formValues.password}
                 onChange={handleChange}/>
                
                </div>
                <div className="forLogButton">
                <button >LOGIN</button>
             <p className="TSU">You don't have an account?<Link to="/" className="thelink"><span> Sign up</span></Link></p>
               </div>
              
                  {/* </div> */}
                  </form>
                </div>
                </div>
          

             </div>

            
        </div>
    )
}
export default LogIn