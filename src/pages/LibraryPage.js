import React, { useState } from 'react'
import { Sidebar } from '../UI/Sidebar'
import { StudentChart } from '../components/StudentChart'
import classes from './LibraryPage.module.css'
import { SearchBox } from '../UI/SearchBox'
import { PopularBook } from '../components/PopularBook'
import { ListBooks } from '../components/ListBooks'

const DUMMY_GENRE=[
  {id:"g1",genre:"New" },
  {id:"g2",genre:"Science" },
  {id:"g3",genre:"Physics" },
  {id:"g4",genre:"Maths" },
  {id:"g5",genre:"Chemistry" },
  {id:"g6",genre:"Fiction" },
  {id:"g7",genre:"History" },
  {id:"g8",genre:"Linguistics" },
]


const genres=DUMMY_GENRE.map((genre)=><li id={genre.id}><img src="./assets/genre.png" alt="" />
<span>{genre.genre}</span></li>)

export const LibraryPage = () => {
  const [enteredKey,setKey]=useState('');
  let check = enteredKey.trim() !=="";

  const keyHandler=(event)=>{
      setKey(event.target.value);
  }
  return (
    <>
    <div className={classes.content}>
      
      <Sidebar/>
      <div className={classes.main} >
        <SearchBox keyword={enteredKey} keyHandler={keyHandler}/>
        {!check && 
            <>
              <div className={classes.genre}>      
            <ul>
              <li><img src="./assets/all.png" alt="" />
                  <span>All</span></li>
              {genres}
            </ul>
      </div>

        
        <PopularBook/>
        <ListBooks/>
            </>
      
        }
        {check && 
          <h1>
            Hasil Pencarian untuk : {enteredKey}
          </h1>
        }
          
        
      </div>


      
    </div>
    </>
  )
}
