import React from 'react'
import classes from "./Sidebar.module.css"
export const Sidebar = () => {
  return (
    <>
    <div className={classes.sidebar}>
        <nav className={classes["side-nav"]}>
          <ul className={classes['sidebar-nav']}>
            <li><img src='./assets/home.svg'></img></li>
            <li><img src='./assets/icon1.svg'></img></li>
            <li><img src='./assets/icon2.svg'></img></li>
            <li><img src='./assets/icon3.svg'></img></li>
            
           
          </ul>

        </nav>
    </div>
    
    </>
  )
}
