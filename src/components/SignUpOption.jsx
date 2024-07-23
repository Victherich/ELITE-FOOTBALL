import React, { useContext } from 'react'
import "../CSS/SignUpOption.css"
import { Context } from './Context'
import { useNavigate } from 'react-router-dom'

const SignUpOption = () => {
    const {setSignUpOptionSwitch}=useContext(Context)
    const navigate= useNavigate()
  return (
    <div className='SignUpOptionWrap'>
        <div className='SignUpOption'>
      <h2 >Sign up as</h2>
      <div className='SignUpOptionButtonWrap'>
            <button onClick={()=>{navigate("/playersignup");setSignUpOptionSwitch(false)}}>Player</button>
            <button onClick={()=>{navigate("/agentsignup");setSignUpOptionSwitch(false)}}>Agent</button>
      </div>
      <p onClick={()=>setSignUpOptionSwitch(false)}>X</p>
    </div>
    </div>
  )
}

export default SignUpOption
