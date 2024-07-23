import React from 'react';
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import SignUp from './Component SignUp/SignUp';
import LogIn from './Component LogIn/LogIn';
import './App.css'


const router = createBrowserRouter([
  {
    path:"/",
    element: <SignUp/>
  },

  {
    path:"/LogIn",
    element:<LogIn/>
  },
]);

const App =()=> {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
