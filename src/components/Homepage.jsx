import React, { useContext, useState } from 'react'
import Header from './Header'
import { FaBell, FaDashcube, FaFileCirclePlus, FaMessage, FaSearchengin, FaUser } from 'react-icons/fa6'
import { FaHamburger, FaSearch, FaUserCircle } from 'react-icons/fa'
import "../CSS/HomePage.css"
import HomeStatus from './HomeStatus'
import { Context } from './Context'
import UserDashboard from './UserDashboard'
import HomePostComponent from './HomePostComponent'
import { useNavigate } from 'react-router-dom'


const Homepage = () => {
    const [homeSwitch,setHomeSwitch]=useState(0)
    const {login}=useContext(Context)
    const navigate=useNavigate()
    
  return (
    <div>
      <Header/>
      <div className='Home'>
        <div className='HomeSideMenuWrap'>
            {login&&<div className='HomeSideMenu' onClick={()=>{setHomeSwitch(0);navigate("/userdashboard")}}><FaDashcube/><p>Dashboard</p></div>}
            <div className='HomeSideMenu' onClick={()=>setHomeSwitch(1)}><FaSearch/><p>Search</p></div>
            {login&&<div className='HomeSideMenu' onClick={()=>setHomeSwitch(2)}><FaMessage/><p>Messages</p></div>}
            {login&&<div className='HomeSideMenu' onClick={()=>setHomeSwitch(3)}><FaBell/><p>Notifications</p></div>}
            {login&&<div className='HomeSideMenu' onClick={()=>setHomeSwitch(4)}><FaFileCirclePlus/><p>Create</p></div>}
            {login&&<div className='HomeSideMenu' onClick={()=>setHomeSwitch(5)}><FaUserCircle/><p>Profile</p></div>}
            <div className='HomeSideMenu' onClick={()=>setHomeSwitch(6)}><FaHamburger/><p>More</p></div>
        </div>
        <div className='HomeContent'>
                <HomeStatus/>
                <HomePostComponent/>
               
        </div>

      </div>
    </div>
  )
}

export default Homepage
