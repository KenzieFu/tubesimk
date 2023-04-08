import React from 'react'
import { Box } from '../util/Box'
import classes from './StudentChart.module.css'
import { BookBar } from '../util/BookBar'
export const StudentChart = () => {
  return (
    <>
        <Box>
            <div style={{ padding:"0 0 0 30px" }}>
            <div className={classes.info}>
                <h1>Halo, Triffine!</h1>
                <span>Sudahkah kamu membaca buku hari ini?</span>
            </div>
            <div className={classes.chart}>
                <BookBar image="./assets/bukuPinjam.png" label="Buku Pinjam" color="#FF0000" />
                <BookBar image="./assets/clockVector.png" label="Lama Membaca" color="#FFBD35"/>
                <BookBar image="./assets/bukuKembali.png" label="Buku Kembali" color="#49CF78" />
                <BookBar image="./assets/chartVector.png" label="Peringkat Membaca" color="#1388CD" />
            </div>
           <div className={classes.history} >
            <h2>Riwayat Peminjaman Buku</h2>
                <nav className={classes.navbar} >
                    <ul>
                        <li style={{ display:"flex", flexDirection:"column" }}>Dipinjam
                            <span style={{ marginTop:"5px" }} className={classes["highlight-line"]}></span>
                        </li>
                        <li style={{ marginBottom:"5px", display:"flex", flexDirection:"column",color:"#D9D9D9"  }}>Dikembalikan</li>
                        <span style={{ display:"transparent", marginTop:"5px"   }} className={classes["highlight-line"]}></span>
                    </ul>
                    <span style={{ fontWeight:"bolder" }}>Sort By</span>
                </nav>
           </div>
           </div>
        </Box>
    </>
  )
}
