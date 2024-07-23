import React from 'react'
import WelcomeImg from "../Images/WelcomePic.png"
import "../CSS/WelcomePage.css"

const WelcomePage = () => {
  return (
    <div className='WelcomePage'>
      <img src={WelcomeImg} alt="welcome image"/>
        <h2>ELITE FOOTBALL</h2>
        <h2>Connecting players to the real world of football.</h2>
    </div>
  )
}

export default WelcomePage
