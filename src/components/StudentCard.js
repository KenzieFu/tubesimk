import React from 'react'
import classes from "./StudentCard.module.css"

export const StudentCard = () => {
  return (
    <>
<div className={classes.card}>
    <div className={classes["card-info"]}>
        <div style={{ display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",minWidth:"380px" }}>
            <div style={{ width:"75px",height:"60px",borderRadius:"10px",background:"#EAEE0D" }}></div>
            <img src="./assets/Icons/signal.png" alt="" />
        </div>
        <div className={classes["card-details"]}>
            <div style={{ display:'flex',flexDirection:"column",gap:"7px" }}>
                <span>Name</span>
                <span>Trifine Laurent</span>
            </div>
            <div style={{ display:'flex',flexDirection:"column",gap:"7px" }}>
                <span>ID Anggota</span>
                <span>2020330035</span>
            </div>
        </div>
        
    </div>
    <div className={classes["card-footer"]}>
        <div style={{ display:'flex',flexDirection:"column",gap:"7px" }}>
                <span>Kartu Anggota</span>
                <span>Perpustakaan BUI</span>
            </div>
            <div className={classes.circle}></div>
        </div>
        
</div>
    </>
  )
}
