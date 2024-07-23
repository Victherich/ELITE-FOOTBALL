import React, { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext()

const ContextProvider = ({children}) => {
    const [login, setLogin]=useState(false)
    const [signUpOptionSwitch,setSignUpOptionSwitch]=useState(false)
  return (
    <Context.Provider value={{login,setLogin,signUpOptionSwitch,setSignUpOptionSwitch}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
