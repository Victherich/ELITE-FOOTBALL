import React from 'react'
import "../CSS/Hero.css"
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className='Hero'>
        <div className='HeroText'>
        <h1>GET CONNECTED WITH <br/>FOOTBALL INTERNATIONALLY<br/>AND GLOBALLY</h1>
        <h3>All in one piece for you</h3>
        <button onClick={()=>navigate("/home")}>Get Started</button>
        </div>

    </div>
  )
}

export default Hero
