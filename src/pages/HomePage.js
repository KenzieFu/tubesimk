import React from 'react'
import classes from './HomePage.module.css'
import { Info } from '../components/Info'

const DUMMY_info=[
    {id:"1",img:"./assets/info1.png",title:"Now Enrolling for School Year 2023/2024",content:"If you need any further information, please feel free to contact us at 0878 6912 3707 ",button:"Register"},
    {id:"2",img:"./assets/info2.png",title:"Jadwal Pembelian Buku T.P. 2022/2023",content:"If you need any further information, please feel free to contact us at 0878 6912 3707 ",button:"More Info"},
    {id:"3", img:"./assets/info3.png", title:"Site Perpustakaan Methodist Charles Wesley",content:"Peminjaman buku perpustakaan offline & online melalui website. ", button:"Website"}
]

let infos=DUMMY_info.map((info)=><Info img={info.img} title={info.title} content={info.content} button={info.button} />)

const Announce={
    title:"",
    content:""
}

export const HomePage = () => {
  return (
    <div style={{ background:"white" }}>
    
        <div className={classes.main}>
            <div className={classes['main-left']}>
                <div className={classes.quote}>
                    <span>The fear of the Lord is the beginning of knowledge,</span>
                    <span>but fools despise wisdom and instruction.</span>
                    <span>Proverbs 1:7a</span>
                </div>
                <h1 style={{ display:"flex",flexWrap:"wrap",fontSize:"60px", width:"80%"}}>
                    Welcome to Methodist Charles Wesley School
                </h1>
                <div style={{ display:"flex", flexDirection:"column", marginBottom:"50px" }}>
                    <span>Komplek CBD. Polonia Blok CC No.108Jl. Padang Golf (dalam)</span>
                    <span>Medan – Sumatera Utara 20157 Indonesia</span>
                </div>

                <button className={classes["main-button"]}>Hubungi Kami</button>
            </div>
            <div className={classes['main-right']}>
                <div className={classes["linear-box"]}>
                <img className={classes['linear-box-img']} src='./assets/schoolHori.png'/>
                <div className={classes.logo}>
                    <div className={classes["circle-logo"]}>  
                    </div>
                    <div className={classes["linear-circle"]}></div>
                    

                </div>
                </div>
                
            </div>
        </div>

        <div className={classes.content} >
            <div className={classes["left-content"]}>

                {infos}
            </div>
            <div className={classes["right-content"]}>
                <div>Image</div>
                <div>
                    <h1 className={classes["right-content_h2"]}>Pengumuman T.P. 2022/2023</h1>
                    <p className={classes["right-content_p"]}>Salam Sejahtera bagi kita semua.Ada beberapa hal yang perlu kami infokan sehubungan dengan 
                        kegiatan belajar mengajar:
                        <ol className={classes["right-content_ol"]}>
                            <li>Kegiatan Belajar Mengajar Semester Ganjil T.P. 2022 – 2023 dimulai pada tanggal 14 Juli 2022.</li>
                            <li>Pengambilan Buku Pelajaran 11 – 13 Juli 2022 di Lantai 1.</li>
                            <li>Masa Pengenalan Lingkungan Sekolah (MPLS) tanggal 14 Juli 2022 pukul 07.50 – 10.00.</li>
                            <li>Simulasi pembelajaran tanggal 15 Juli 2022 pukul 07.50 – 12.40.</li>
                            <li>Pembelajaran dilaksanakan secara penuh dengan tatap muka di sekolah mulai tanggal 18 Juli 2022</li>
                            <li>Untuk informasi lebih lanjut, kami informasikan melalui Group kelas.</li>
                        </ol>

                        Terima Kasih atas perhatian dan kerjasamanya.Methodist Charles Wesley
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
