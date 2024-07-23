import React from 'react'
import Logo from "../Images/logo.png"
import "../CSS/Footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='FooterUp'>
      <div className='LogoWrap'>
      <img src={Logo} alt="logo" style={{margin:"0px",border:"5px solid white",borderRadius:"50%"}}/>
      <h3 style={{color:"white"}}>ELITE<br/>FOOTBALL</h3>
      </div>
      <div className='FooterUpRight'>
        <p>Elite Football<br/>
Take your skill to the next level !!.<br/>
Don’t hesitate your career matters<br/>
CopyRight @ ELITE FOOTBALL </p>
      </div>
      </div>
      <div className='FooterDown'>
            <div className='FooterDown1'>
                <p>
                    <span style={{fontWeight:"bold"}}>Elite Football:</span><br/>Connecting all young<br/>Footballers across<br/>the globe.

                </p>
            </div>
            <div className='FooterDown1'>
                <h4>Pages </h4>
                <p>About us</p>
                <p>Contact us</p>
                <p>Privacy Policy</p>
            </div>
            <div className='FooterDown1'>
                <h4>Our Partners </h4>
                <p>@CodeAfrica</p>
                <p>@TheCurveAfrica</p>
            </div>
      </div>
    </div>
  )
}

export default Footer
