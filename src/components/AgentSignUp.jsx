import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../CSS/SignUpLogin.css";
import ball from "../Images/ball.png";
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AgentSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    gender: '',
    email: '',
    password: '',
  });

  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    if (formData.password.length < 8 && formData.password !== '') {
      setPasswordError("Password must be minimum of 8 characters");
    } else {
      setPasswordError("");
    }
  }, [formData.password]);

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
      const response = await axios.post('/register_agent', formData);
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: response.data.message,
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
          text: 'An error occurred while creating this account',
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
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Register Agent</h2>
        <label>
          Username:
          <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />
        </label>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          {passwordError && <p style={{ color: "red", fontSize: "small" }}>{passwordError}</p>}
        </label>
        <button type="submit">Register</button>
        <p style={{ fontSize: "small", textAlign: "center", marginTop: "10px" }}>Already have an account? <span style={{ color: "green", cursor: "pointer" }} onClick={() => navigate("/login")}>Log in</span></p>
        <p onClick={() => navigate("/")} style={{ color: "green", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", marginTop: "10px", cursor: "pointer" }}><FaHome />Home</p>
      </form>
    </div>
  );
};

export default AgentSignUp;
