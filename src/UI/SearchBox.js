import React from 'react'
import classes from './SearchBox.module.css'
export const SearchBox = (props) => {
  return (
    <>
    <div className={classes['search-box']}>
        <img width="30px" src="./assets/searchLogo.png" alt="" />
        <input type="text" placeholder='Cari Buku' value={props.keyword}  onChange={(event)=>props.keyHandler(event)} />
        <button className={classes["main-button"]}>Search</button>
    </div>
    </>
  )
}
