import React from 'react'

import classes from './LatestBook.module.css'
export const LatestBook = () => {
  return (
    <>
   
        <div className={classes.box} style={{ maxWidth:"400px" }}>
            <h1>Baru Dipinjam</h1>
            <img style={{ textAlign:"center",margin:"20px 0" }} src="./assets/book.png" width="270px" height="400px" alt="" />
            <div className={classes.rating}>
            <span className={'fa fa-star '+ classes.checked}></span>
                  <span className={'fa fa-star '+ classes.checked}></span>
                  <span className={'fa fa-star '+ classes.checked}></span>
                  <span className='fa fa-star'></span>
                  <span className='fa fa-star'></span>
            </div>
            <div className={classes["book-info"]}>
                <h1 className={classes["book-info_h1"]}>Laut Bercerita</h1>
                <span>Leila salika Chudori</span>
            </div>
            <div className={classes.sinopsis}>
                <h2>Sinopsis</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident porro ratione magni repellendus nostrum similique, tempora alias dolor ab ea! Et, eaque. Harum exercitationem rem ab veritatis obcaecati, perspiciatis pariatur.</p>
            </div>
        </div>
        </>
  )
}
