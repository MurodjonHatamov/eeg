import React, { useState } from 'react'
import styles from './Learing.module.css'
import { Link } from 'react-router-dom';
function Learing() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.learing}>
<nav className={styles.navLearing}>
<div className={styles.container}
>
<Link to={"/"}>
<div className={styles.navbarLogo}>
        <h2>eegni </h2>
        <p>o'rganish</p>
    </div></Link>
    <div className={styles.menu}>
    <button onClick={()=>{
        setIsOpen(!isOpen)
    }} className={isOpen ? styles.activeBtn : styles.menuBtn   }>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
    </button>
<div className={`${styles.menuBlock} ${isOpen ? styles.show : ''}`}>
<div className={styles.menuItem}>Asosiy fiziologiya</div>
<div className={styles.menuItem}>Asosiy fiziologiya</div>
<div className={styles.menuItem}>Asosiy fiziologiya</div>
<div className={styles.menuItem}>Asosiy fiziologiya</div>
</div>
    </div>
 
</div>
</nav>
<header className={styles.learingHeder}>
<div className={styles.container}>
<h1 className={styles.headerText}>neonatal eeg</h1>
<div className={styles.headerButton}>
<button>O'RGANING</button>
<button>AMALIYOT</button>
<button>ATLAS</button>
</div>
</div>
</header>
<section className={styles.learingContent}>

<div className={styles.container}>
    <h1>texnik komponentlar
    </h1>
    <p>Yangi tug'ilgan chaqaloqlarning boshi kichik va ba'zida begonadek ko'rinadigan bo'lsa, to'liq 10-20 montaj elektrodlarni bir-biriga juda yaqin qo'yadi va ular o'rtasida tuz ko'prigini (artifakt bo'limida muhokama qilinadi) hosil qilish xavfini tug'diradi. Shunday qilib, neonatal montaj 10-20 tizimning qisqartirilgan versiyasi bo'lib, u yangi tug'ilgan chaqaloqlarda faolroq bo'lgan markaziy hududlarga qaratilgan va T3 dan T4 gacha bo'lgan ko'ndalang zanjirni o'z ichiga oladi. Ushbu versiya chaqaloq to'liq muddat tugagunga qadar yoki eng ko'p 46 haftalik postmenstrüel yoshga qadar qo'llaniladi (PMA ta'rifi uchun pastga qarang).
    </p>
    <img src="https://uploads-ssl.webflow.com/5e2b590ca27de6be81c64780/601c28b3520d087e1ca43b88_5ea1b2e4e9d75d74d8977f5d_Neonatal%20Montage-p-500.png" alt=" sdsd" />
    <p>
Yangi tug'ilgan chaqaloqlarda, miya va EKG elektrodlaridan tashqari, ko'zning yon tomoniga o'rnatilgan ko'zdan tashqari elektrodlar (elektro-okulogramma, EOG), iyagiga elektromiyografiya elektrodlari (EMG) va nafas olish uchun ko'krak qafasi harakatlarini baholashga olib keladi (pnevmograf). Neonatal tadqiqotlar 0,01 - 0,5 Gts past chastotali filtr bilan 15 mm/sek tezlikda o'qiladi .

</p>
</div>
</section>

    </div>
  )
}

export default Learing