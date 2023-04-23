import React from 'react'
import classes from "./Navbar.module.css"

import { NavLink } from 'react-router-dom';


export const Navbar = (props) => {


  return (
    <>
        <header className={classes["nav-header"]}>
            <nav className={classes.navbar}>
                <ul>
                    <li ><NavLink style={{ textDecoration:"none" }} to="/">Home</NavLink></li>
                    <li>Contact Us</li>
                    <li>Registrasi</li>
                </ul>
                <div className={classes.divide}>
                    <img src="/assets/logo-mcw-border.png " height="70" widht="70" alt="" />
                </div>
                <ul>
                    <li>Perpustakaan </li>
                    <li>Masuk Perpus</li>
                    <li onClick={props.onClick}>Login</li>
                </ul>
            </nav>
        </header>
    </>
  )
}

