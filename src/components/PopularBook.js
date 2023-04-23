import React from 'react'
import classes from './PopularBook.module.css'
export const PopularBook = () => {

    const DUMMY_POPULAR=[
    {id:"p1",title:"My Quite Imagination",img:"./assets/BookCover.png",author:"Yoga Martabak"},
    {id:"p2",title:"My Quite Imagination",img:"./assets/BookCover.png",author:"Yoga Martabak"},
    {id:"p3",title:"My Quite Imagination",img:"./assets/BookCover.png",author:"Yoga Martabak"},
    {id:"p4",title:"My Quite Imagination",img:"./assets/BookCover.png",author:"Yoga Martabak"},
    ]

    const pop =DUMMY_POPULAR.map((popular)=> <li  id={popular.id}><img src={popular.img} alt="" />
    <div className={classes["book-detail"]}><h2>{popular.title}</h2>
    <span>{popular.author}</span></div>
</li>)

  
  return (
    <>
    <div className={classes.popular}>
        <h1>Popular</h1>
    <ul>
        {pop}
        
    </ul>
    </div>
    </>
  )
}
