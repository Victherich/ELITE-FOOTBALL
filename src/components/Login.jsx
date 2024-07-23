import React, { useState } from 'react';
import axios from 'axios';
import "../CSS/SignUpLogin.css";
import ball from "../Images/ball.png";
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { userLogin } from '../Features/Slice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = axios.post('/login', {
      //   userName: formData.userName,
      //   password: formData.password,
      // });
  
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        // text: response.data.message,
      }).then(() => {
        const userInfo = true;
      const userToken = true;
      // const userInfo = response.data.user;
      // const userToken = response.data.token;
      dispatch(userLogin({ userInfo, userToken })); 
        navigate("/userdashboard");
      });
    } catch (error) {
      if (error.response && error.response.data) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while logging in',
        });
      }
    }
  };
  
  return (
    <div className="signup-container">
      <div className='signup-leftContainer'>
        <img src={ball} alt="football" />
        <h2>ELITE FOOTBALL</h2>
        <p>where the best are revealed</p>
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Login</h2>
        <label>
          Username:
          <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <button type="submit">Login</button>
       
        <p onClick={()=>navigate("/")} style={{color:"green",display:"flex",justifyContent:"center",alignItems:"center",gap:"5px",marginTop:"10px",cursor:"pointer"}}><FaHome/>Home</p>
      </form>

    </div>
  );
};

export default Login;
