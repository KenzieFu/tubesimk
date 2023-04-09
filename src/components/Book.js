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
                <div style={{ display:"flex",justifyContent:"space-between", alignItems:"center" }}>
                    <h2>Laut Bercerita</h2>
                    <button>Details</button>
                </div>
                <p>Leila salika Chudori</p>
                <p>Rating</p>
            </div>
        </div>
    </Box>
  )
}
