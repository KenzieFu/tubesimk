import React from 'react'
import classes from "./StudentPage.module.css";
import { Sidebar } from '../util/Sidebar';
import { StudentChart } from '../components/StudentChart';
import { Book } from '../components/Book';
export const StudentPage = () => {
  return (
    <div className={classes.content}>
      
          <Sidebar/>
          <div>
          <StudentChart/>
          <div className={classes["list-books"]}>
            <Book/>
            </div>
          </div>
           
           
          
        
        
        </div>

   
  ) 
}
