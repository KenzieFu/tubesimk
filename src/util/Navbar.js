import React from 'react'
import classes from "./Navbar.module.css"
import { Link } from 'react-router-dom'
export const Navbar = (props) => {
  return (
    <>
        <header>
            <nav className={classes.navbar}>
                <ul>
                    <li><Link to='/homepage'>Home</Link></li>
                    <li>Contact Us</li>
                    <li ><Link to='/form'>Registrasi</Link></li>
                </ul>
                <div className={classes.divide}>
                    <img src="/assets/logo-mcw-border.png " height="70" widht="70" alt="" />
                </div>
                <ul>
                    <li>Perpustakaan </li>
                    <li onClick={props.onClickLogin}>Masuk Perpus</li>
                    <li>A</li>
                </ul>
            </nav>
        </header>
    </>
  )
}
