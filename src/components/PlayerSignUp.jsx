import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../CSS/SignUpLogin.css";
import ball from "../Images/ball.png";
import { useNavigate } from 'react-router-dom';
import { FaHome, FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { ClipLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { userLogin } from '../Features/Slice';

const Positions = {
  goalKeeper: ["goalKeeper"],
  defender: ["LB", "RB", "CLB", "CB", "CRB"],
  midfielder: ["CAM", "LM", "CM", "RM", "CDM"],
  attacker: ["LW", "RF", "LF", "RW"],
  striker: ["CF", "ST", "SS"]
};

const PlayerSignUp = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const [mainPosition, setMainPosition] = useState('');
  const [subPosition, setSubPosition] = useState('');
  const [formData, setFormData] = useState({
    userName: '',
    gender: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [passwordError, setPasswordError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // Password visibility state

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

  console.log(formData)
  console.log(mainPosition,subPosition)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.password.length>=8){
      
    setLoading(true); // Set loading to true on submit
    
    try {
      const response = await axios.post('https://elitefootball.onrender.com/elitefootball/register_player', {
        ...formData,
        position: { [mainPosition]: subPosition },
      });
      console.log(response.data)
      Swal.fire({
        icon: 'success',
        // title: 'Registration Successful',
        text: response.data.message,
        // timer:2000,
        showConfirmButton:true,
      });
      const userInfo = response.data;
      const userToken = null;
      dispatch(userLogin({userInfo,userToken}));
      navigate('/verify');

    } catch (error) {
      console.error(error)
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
    } finally {
      setLoading(false); // Set loading to false after submission
    }
    }else{
      Swal.fire({icon:"warning",text:"Complete your password"})
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
        <h2>Register Player</h2>
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
          Main Position:
          <select name="mainPosition" value={mainPosition} onChange={(e) => setMainPosition(e.target.value)} required>
            <option value="">Select Main Position</option>
            {Object.keys(Positions).map((position) => (
              <option key={position} value={position}>{position}</option>
            ))}
          </select>
        </label>
        <label>
          Sub Position:
          <select name="subPosition" value={subPosition} onChange={(e) => setSubPosition(e.target.value)} required>
            <option value="">Select Sub Position</option>
            {mainPosition && Positions[mainPosition].map((subPos) => (
              <option key={subPos} value={subPos}>{subPos}</option>
            ))}
          </select>
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <div style={{ position: 'relative' }}>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div
              style={{ position: 'absolute', right: '10px', top: '60%', transform: 'translateY(-50%)', cursor: 'pointer',fontSize:"1.2rem" }}
              onClick={() => setPasswordVisible(!passwordVisible)} 
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          {passwordError && <p style={{ color: "red", fontSize: "small" }}>{passwordError}</p>}
        </label>
        <button type="submit" disabled={loading}>
          {loading ? <ClipLoader size={20} color={"#fff"} /> : "Register"}
        </button>
        <p style={{ fontSize: "small", textAlign: "center", marginTop: "10px" }}>Already have an account? <span style={{ color: "green", cursor: "pointer" }} onClick={() => navigate("/login")}>Log in</span></p>
        <p onClick={() => navigate("/")} style={{ color: "green", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", marginTop: "10px", cursor: "pointer" }}><FaHome />Home</p>
      </form>
    </div>
  );
};

export default PlayerSignUp;
