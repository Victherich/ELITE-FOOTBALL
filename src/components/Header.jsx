import React, { useContext } from 'react'
import Logo from "../Images/logo.png"
import {NavLink, Navigate, useNavigate} from "react-router-dom"
import "../CSS/Header.css"
import {FaBook, FaMessage, FaOpensuse, FaRegistered, FaUsers} from "react-icons/fa6"
import { Context } from './Context'

const Header = () => {
  const {login,setLogin,setSignUpOptionSwitch}=useContext(Context)
  const navigate=useNavigate()
  return (
    <div className='Header'>
      <div className='LogoWrap'>
      <img src={Logo} alt="logo"/>
      <h3>ELITE<br/>FOOTBALL</h3>
      </div>
      <div className='Menu'>
      <NavLink to={"/aboutus"} className="Menu1">About us</NavLink>
      <NavLink to={"/aboutus"} className="Menu2"><FaUsers/></NavLink>
      <NavLink to={"/contactus"} className="Menu1">Contact Us</NavLink>
      <NavLink to={"/contactus"} className="Menu2"><FaMessage/></NavLink>
      <NavLink to={"/privacypolicy"} className="Menu1">Privacy Policy</NavLink>
      <NavLink to={"/privacypolicy"} className="Menu2"><FaBook/></NavLink>
      </div>
      <div className='OnboardingButtons'>
      {!login&&<button className='Menu3' onClick={()=>setSignUpOptionSwitch(true)}>Sign up</button>}
      <FaRegistered className='Menu4'/>
      {!login&&<button className='Menu3' onClick={()=>navigate("/login")}>Login</button>}
      <FaOpensuse className='Menu4'/>
      </div>
      
    </div>
  )
}

export default Header
