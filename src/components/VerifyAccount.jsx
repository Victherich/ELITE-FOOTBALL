import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import "../CSS/SignUpLogin.css";
import ball from "../Images/ball.png";
import { FaHome } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const VerifyAccount = () => {
    const userInfo = useSelector(state=>state.userInfo)
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/verify/${userInfo.id}`, { otp });
      Swal.fire({
        icon: 'success',
        title: 'Account Verified',
        text: response.data.message,
      }).then(() => navigate('/userdashboard'));
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Verification Error',
        text: error.response?.data.message || 'An error occurred while verifying your account',
      });
    }
  };


  const handleResend = async () => {
    const loadingAlert = Swal.fire({
          text: "Resending Otp...",
          allowOutsideClick: false,
          allowEscapeKey: false,
          showConfirmButton: false
        });
  
        Swal.showLoading();
    try {
      const response = await axios.post(`/resend_otp/${userInfo.id}`);
      Swal.fire({
        icon: 'success',
        title: 'OTP Resent',
        text: response.data.message,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data.message || 'An error occurred while resending the OTP code',
      });
    }finally{
        loadingAlert.close();
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
        <h2>Verify Account</h2>
        <label>
          OTP Code:
          <input type="text" value={otp} onChange={handleChange} required />
        </label>
        <button type="submit">Verify</button>
        <p style={{ fontSize: "small", textAlign: "center", marginTop: "10px" }}>
          <span style={{ color: "green", cursor: "pointer" }} onClick={handleResend}>Resend OTP</span>
        </p>
        <p onClick={() => navigate("/")} style={{ color: "green", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", marginTop: "10px", cursor: "pointer" }}>
          <FaHome />Home
        </p>
      </form>
    </div>
  );
};

export default VerifyAccount;
