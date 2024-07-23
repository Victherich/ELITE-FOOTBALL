import React from 'react'
import "../CSS/AboutUs.css"
import ab1 from "../Images/stickers-soccer-football-player-young-man-kicking-silhouette-removebg-preview 1.png"
import ab2 from "../Images/woman-removebg-preview 1.png"

const AboutUs = () => {
  return (
    <div className='AboutUsWrap'>
        <p>Elite Football:<span style={{color:"#00AF07"}}> About us</span></p>
        <div className='AboutUsBody'>
        <div className='AboutUs1'>
            <p>Let’s play to our strengthe, shall we?
You focus on bringing your amazing ideas to life and
we focus on providing all the <span>commerce tools</span>
                      you need</p>
        </div>
        <div className='AboutUs1'>
            <img src={ab1} alt="ab1"/>
        </div>
        <div className='AboutUs1'>
            <img src={ab2} alt="ab2"/>
        </div>
        <div className='AboutUs1'>
        <p>Let’s play to our strengthe, shall we?
You focus on bringing your amazing ideas to life and
we focus on providing all the <span>commerce tools</span>
                      you need</p>
        </div>
    </div>
    <p>elitefootball@gmail.com:<span style={{color:"#00AF07"}}> Contact us</span></p>
    </div>
  )
}

export default AboutUs
