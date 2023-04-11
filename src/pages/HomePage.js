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
            </div>
            <div className={classes['main-right']}>

            </div>
        </div>
        <div ></div>
    </div>
  )
}
