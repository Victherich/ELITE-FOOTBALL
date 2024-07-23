import React, {useState} from 'react';
import "./SignUp.css";
import {Link} from 'react-router-dom';

const SignUp = ()=>{

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
        <div className='Bg'>
          <div className="leftSignup">
              <div className="forballPic">
                <img src="./src/Ball.png" alt="BALLIMG" />
              </div>
              <div className="TextElite">
                    <p>ELITE </p>
                    <p>FOOTBALL</p>
              </div>

                <p className='cText'>"Where the best are revealed"</p>
           
          </div>

            <div className="rightSignup">

                <div className="signupLogo">
                    <div className="left"><p>Sign up</p></div>
                    <div className="rightLogo">
                        <div className="circleLogo">
                         <img src="./src/proIcon.png" alt="icon" />
                        </div>
                    </div>

                  
                </div>
                <form onSubmit={handleSubmit} className="forInputContain">

                <div className="inputContainer">
                <div className="forInput">
                <label > Username</label>
                <input type="text" name='username'
                 pattern="/^[a-zA-Z]+[a-zA-Z0-9] (_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/"
                 value={formValues.username}
                  onChange={handleChange}/>
                </div>
                <div className="forInput">
                <label > Email</label>
                <input type="text" name='email'
                     pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                     value={formValues.email} onChange={handleChange}/>
                </div>
                <div className="forInput">
                <label >Password</label>
                <input type="text" name='password'
                   pattern=".{8,}"
                   value={formValues.password}
                    onChange={handleChange}/>
                </div>
                <div className="forInput">
                <label >Position</label>
                {/* <input type="text" /> */}
                <select name="Goal keeper" id="Goal keeper">
                
               <option value="Goal Keeper">Goal Keeper</option>
               <option value="Defender">Defender</option>
               <option value="Mid Fielder">Mid Fielder</option>
               <option value="Strikers">Strikers</option>
                </select>
                
               
                </div>
                <div className="forInput">
                <label >Gender</label>
                {/* <input type="text" /> */}
              <select name="Center" id="Center">
                <option value="Center forward">Center foward</option>
                <option value="Left winger">Left winger</option>
                <option value="Right forward">Right forward</option>
                <option value="Left forward">Left forwad</option>
              </select>
                </div>

                <div className="forButton">
         <button>Create Account</button>
         <p className='Tl'>Already have an account?<Link to="/LogIn" className='thelink' > <span>Log in</span></Link></p>
                </div>
                </div>
                </form>

            </div>


        </div>
    )
}
export default SignUp