import React from 'react'
import "../CSS/Team.css"
import Victor from "../Images/Victherich.png"
import Temmy from "../Images/Temmy.png"
import Prosper from "../Images/Prosper.png"
import Benedict from "../Images/Benedict.png"

const Team = () => {
  return (
    <div className='Team1'>
        <div className='Team2'>
            <div className='Team3'>
                <div className='Team4'>
                    <img src={Victor} alt='Team'/>
                    <p>Victor Ndu</p>
                    <p>Frontend Engineer</p>
                    <p>Victherich@gmail.com</p>
                </div>
                <div className='Team4'>
                <img src={Temmy} alt='Team'/>
                <p>Temmy Lad</p>
                <p>Frontend Engineer</p>
                <p>temitopeatanda02@gmail.com</p>
                </div>
                <div className='Team4'>
                <img src={Prosper} alt='Team'/>
                <p>Chukwunonye Prosper</p>
                <p>Backend Engineer</p>
                <p>victorjames1@gmail.com</p>
                </div>
                <div className='Team4'>
                <img src={Benedict} alt='Team'/>
                <p>Nwuzor Benedict</p>
                <p>UIUX Designer</p>
                <p>nwuzorbenedict1@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team
