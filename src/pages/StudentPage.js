import React from 'react'
import classes from "./StudentPage.module.css";
import { Sidebar } from '../UI/Sidebar';
import { StudentChart } from '../components/StudentChart';
import { Book } from '../components/Book';
import { StudentCard } from '../components/StudentCard';
import { LatestBook } from '../components/LatestBook';
export const StudentPage = () => {
  return (
    <div className={classes.content}>
      
          <Sidebar/>
          <div>
            <StudentChart/>
              <div className={classes["list-books"]}>
              <Book/>
              <Book/>

            </div>
          </div>
           <div>
            <StudentCard/>
            <LatestBook/>
           </div>
           
          
        
        
        </div>

   
  ) 
}
