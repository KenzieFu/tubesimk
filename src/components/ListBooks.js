import React from 'react'
import classes from './ListBooks.module.css'
export const ListBooks = () => {
    
    const DUMMY_OTHER=[
        {id:"p1",title:"My Quite Imagination",img:"./assets/BookCover.png",author:"Yoga Martabak"},
        {id:"p2",title:"My Quite Imagination",img:"./assets/BookCover.png",author:"Yoga Martabak"},
        {id:"p3",title:"My Quite Imagination",img:"./assets/BookCover.png",author:"Yoga Martabak"},
        {id:"p4",title:"My Quite Imagination",img:"./assets/BookCover.png",author:"Yoga Martabak"},
        {id:"p5",title:"My Quite Imagination",img:"./assets/BookCover.png",author:"Yoga Martabak"},
        {id:"p6",title:"My Quite Imagination",img:"./assets/BookCover.png",author:"Yoga Martabak"},
        {id:"p7",title:"My Quite Imagination",img:"./assets/BookCover.png",author:"Yoga Martabak"},
        {id:"p8",title:"My Quite Imagination",img:"./assets/BookCover.png",author:"Yoga Martabak"},
        {id:"p9",title:"My Quite Imagination",img:"./assets/BookCover.png",author:"Yoga Martabak"},
        {id:"p10",title:"My Quite Imagination",img:"./assets/BookCover.png",author:"Yoga Martabak"},
        {id:"p11",title:"My Quite Imagination",img:"./assets/BookCover.png",author:"Yoga Martabak"},
        {id:"p12",title:"My Quite Imagination",img:"./assets/BookCover.png",author:"Yoga Martabak"},
        ]
    
        const others =DUMMY_OTHER.map((other)=> <li  id={other.id}><img src={other.img} alt="" />
        <div className={classes["book-detail"]}><h2>{other.title}</h2>
        <span>{other.author}</span></div>
    </li>)
  return (
    <>
        <div className={classes.other}>
            <h1>Books To Read</h1>
            <ul>
                    {others}
            </ul>
        </div>
    </>
  )
}
