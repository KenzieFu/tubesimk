import React from 'react'
import classes from './HomePage.module.css'
export const HomePage = () => {
  return (
    <div style={{ background:"white" }}>
    
        <div className={classes.main}>
            <div className={classes['main-left']}>
                <div className={classes.quote}>
                    <span>The fear of the Lord is the beginning of knowledge,</span>
                    <span>but fools despise wisdom and instruction.</span>
                    <span>Proverbs 1:7a</span>
                </div>
                <h1 style={{ display:"flex",flexWrap:"wrap",fontSize:"60px", width:"80%"}}>
                    Welcome to Methodist Charles Wesley School
                </h1>
                <div style={{ display:"flex", flexDirection:"column", marginBottom:"50px" }}>
                    <span>Komplek CBD. Polonia Blok CC No.108Jl. Padang Golf (dalam)</span>
                    <span>Medan – Sumatera Utara 20157 Indonesia</span>
                </div>

                <button className={classes["main-button"]}>Hubungi Kami</button>
            </div>
            <div className={classes['main-right']}>
                <div className={classes["linear-box"]}>
                <img className={classes['linear-box-img']} src='./assets/schoolHori.png'/>
                <div className={classes.logo}>
                    <div className={classes["circle-logo"]}>  
                    </div>
                    <div className={classes["linear-circle"]}></div>
                    

                </div>
                </div>
                
            </div>
        </div>

        <div className={classes.content} >
            <div className={classes["left-content"]}></div>
            <div className={classes["right-content"]}></div>
        </div>
    </div>
  )
}
