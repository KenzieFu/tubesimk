import React from 'react'
import { Box } from '../util/Box'
import classes from "./Book.module.css"


export const Book = () => {
  return (
    <Box>
        <div style={{ marginLeft:"50px", display:"flex",padding:'35px' }}>
            <img sty width="150px" height="210" src="./assets/book.png" alt="" />
            <div className={classes["book-info"]} id='book-info'>
                <span className={classes["due-date"]}>4 hari lagi</span>
                <div style={{ display:"flex",justifyContent:"space-between", alignItems:"center",marginBottom:"0",paddingBottom:"0" }}>
                  <div>
                  <h1 className={classes["book-info_h1"]}>Laut Bercerita</h1>
                  <p style={{ marginTop:"0",paddingTop:"0"  }}>Leila salika Chudori</p>
                  </div>
                    
                    <button className={classes["book-info_button"]}>Details</button>
                </div>
                
                <div className={classes.rating}>
                  <div className={classes.stars}>
                  <span className={'fa fa-star '+ classes.checked}></span>
                  <span className={'fa fa-star '+ classes.checked}></span>
                  <span className={'fa fa-star '+ classes.checked}></span>
                  <span className='fa fa-star'></span>
                  <span className='fa fa-star'></span>
                  </div>
                  <span>3.0</span>
                  
                </div>
            </div>
        </div>
    </Box>
  )
}
