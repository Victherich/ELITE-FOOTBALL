import React, { useContext } from 'react'
import LandingPage from './components/LandingPage'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import UserDashboard from './components/UserDashboard'
import SignUpOption from './components/SignUpOption'
import { Context } from './components/Context'
import PlayerSignUp from './components/PlayerSignUp'
import AgentSignUp from './components/AgentSignUp'
import Login from './components/Login'
import PrivateRoute1 from './components/PrivateRoute1'
import VerifyAccount from './components/VerifyAccount'

const App = () => {
  const {signUpOptionSwitch}=useContext(Context)
  return (
    <div>
      <BrowserRouter>
      {signUpOptionSwitch&&<SignUpOption/>}
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/playersignup" element={<PlayerSignUp/>}/>
          <Route path="/agentsignup" element={<AgentSignUp/>}/>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<Homepage/>}/>
          <Route path='/verify' element={<VerifyAccount />} />

     
          <Route path='/userdashboard' element={<PrivateRoute1/>}>
            <Route index element={<UserDashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
