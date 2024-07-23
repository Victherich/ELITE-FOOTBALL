import React, { useEffect, useState } from 'react'
import WelcomePage from './WelcomePage'
import Header from './Header'
import "../CSS/LandingPage.css"
import Hero from './Hero'
import AboutUs from './AboutUs'
import Team from './Team'
import Features from './Features'
import Footer from './Footer'

const LandingPage = () => {
    const [switchWelcome,setSwitchWelcome]=useState(true)
    useEffect(() => {
        const timeoutId1 = setTimeout(() => {
            setSwitchWelcome(true);
        }, 100);

        const timeoutId2 = setTimeout(() => {
            setSwitchWelcome(false);
        }, 3000);

        return () => {
            clearTimeout(timeoutId1);
            clearTimeout(timeoutId2);
        };
    }, []);

  return (
    <div className='LandingPage'>
        <Header/>
        <Hero/>
        <Features/>
        <AboutUs/>
        <Team/>
        <Footer/>
        {switchWelcome&&<WelcomePage/>}
      
    </div>
  )
}

export default LandingPage
