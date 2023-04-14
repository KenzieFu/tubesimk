import React from 'react'
import classes from "./Navbar.module.css"
import { useDispatch, useSelector } from 'react-redux'
export const Navbar = () => {

   const isAuth= useSelector((state) => state.auth);

   const dispatch = useDispatch();

   const loginHandler=()=>{
        dispatch({type:'login'})
   }

   const logoutHandler=()=>{
        dispatch({type:"logout"})
   }
  return (
    <>
        <header>
            <nav className={classes.navbar}>
                <ul>
                    <li >Home</li>
                    <li>Contact Us</li>
                    <li>Registrasi</li>
                </ul>
                <div className={classes.divide}>
                    <img src="/assets/logo-mcw-border.png " height="70" widht="70" alt="" />
                </div>
                <ul>
                    <li>Perpustakaan </li>
                    <li>Masuk Perpus</li>
                    {isAuth?<li onClick={logoutHandler}>Logout</li>:<li onClick={loginHandler}>Login</li>}
                </ul>
            </nav>
        </header>
    </>
  )
}
