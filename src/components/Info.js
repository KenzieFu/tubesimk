import React from 'react'
import classes from "./Info.module.css"

export const Info = () => {
  return (
    <div className={classes.box} >
        <img src='./assets/Group15.png' className={classes.img}/>
      
        <div className={classes.info}>
            <h2 style={{ marginBottom:"0px" }}>Now Enrolling For School Year 2023/2024</h2>
            <p>if you need any further information,please feel free to contact us at 0878 6912 3707</p>
            <button className={classes["info-button"]}>Register</button>
        </div>
    </div>
  )
}
