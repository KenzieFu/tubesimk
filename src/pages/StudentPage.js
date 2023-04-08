import React from 'react'
import classes from "./StudentPage.module.css";
import { Sidebar } from '../util/Sidebar';
import { StudentChart } from '../components/StudentChart';
export const StudentPage = () => {
  return (
    <div className={classes.content}>
        <div className={classes.struct}>
        <Sidebar/>
        <div>
          <StudentChart/>
        </div>
        
        </div>

    </div>
  ) 
}
