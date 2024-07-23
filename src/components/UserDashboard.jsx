import React, { useContext, useState } from 'react'
import Header from './Header'
import { FaBell, FaDashcube, FaFileCirclePlus, FaMessage, FaSearchengin, FaUser } from 'react-icons/fa6'
import { FaHamburger, FaSearch, FaUserCircle } from 'react-icons/fa'
import "../CSS/HomePage.css"
import { Context } from './Context'
import HomePostComponent from './HomePostComponent'
import Logo from "../Images/logo.png"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../Features/Slice'


const UserDashboard = () => {
  const dispatch = useDispatch()
    const [homeSwitch,setHomeSwitch]=useState(0)
    const {login}=useContext(Context)
    const navigate=useNavigate()
    const userToken = useSelector(state=>state.userToken)
    console.log(userToken)
    
  return (
    <div>
 
      <div className='Home'>
        <div className='HomeSideMenuWrap'>
        <div className='LogoWrap' onClick={()=>navigate("/home")}>
      <img src={Logo} alt="logo"/>
      <h3>ELITE<br/>FOOTBALL</h3>
      </div>
            <div className='HomeSideMenu' onClick={()=>setHomeSwitch(0)}><FaDashcube/><p>Dashboard</p></div>
            <div className='HomeSideMenu' onClick={()=>setHomeSwitch(1)}><FaSearch/><p>Search</p></div>
            <div className='HomeSideMenu' onClick={()=>setHomeSwitch(2)}><FaMessage/><p>Messages</p></div>
            <div className='HomeSideMenu' onClick={()=>setHomeSwitch(3)}><FaBell/><p>Notifications</p></div>
            <div className='HomeSideMenu' onClick={()=>setHomeSwitch(4)}><FaFileCirclePlus/><p>Create</p></div>
            <div className='HomeSideMenu' onClick={()=>setHomeSwitch(5)}><FaUserCircle/><p>Profile</p></div>
            <div className='HomeSideMenu' onClick={()=>setHomeSwitch(6)}><FaHamburger/><p>More</p></div>
            <p style={{cursor:"pointer"}} onClick={()=>dispatch(userLogout())}>Logout</p>
        </div>
        <div className='HomeContent'>
               <HomePostComponent/>
                
        </div>

      </div>
    </div>
  )
}

export default UserDashboard
