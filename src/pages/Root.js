import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../UI/Navbar'
import { Footer } from '../components/Footer'
import LoginModal from '../components/auth/Login'
import { useState } from 'react'

export const RootLayout = () => {
  const [showLogin,setShowLogin]=useState(false);

  const showLoginModal=()=>{
      setShowLogin(true);
  }

  const closeLoginModal=()=>{
      setShowLogin(false);
  }
  return (
    <>
        <div style={{background:"#F1F1F1", minHeight:"100vh" }} className="App">
          {showLogin &&<LoginModal onClose={closeLoginModal}/>}
    <Navbar onClick={showLoginModal} />
        <Outlet/>
      <Footer/>
      </div>
    </>
  )
}
