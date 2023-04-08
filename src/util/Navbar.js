import React from 'react'
import classes from "./Navbar.module.css"
export const Navbar = () => {
  return (
    <>
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Registrasi</li>
                </ul>
                <div className={classes.divide}>
                    <img src="/assets/logo-mcw-border.png " height="70" widht="70" alt="" />
                </div>
                <ul>
                    <li>Perpustakaan </li>
                    <li>Masuk Perpus</li>
                    <li>A</li>
                </ul>
            </nav>
        </header>
    </>
  )
}
