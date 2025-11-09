import React from 'react'
import styles from './Home.module.css'
import LessonCard from '../../components/lessonCard/LessonCard'
function Home() {
  return (
    <div className={styles.home}>
<div className={styles.container}>
<div className={styles.header}>
<img src="/imgs/headerImg.png" alt="" />
</div>
</div>
<section className={styles.LessonSec}>
<div className={styles.container}>
<h1 className={styles.contentsText}>MAZMUNI</h1>



    <div className={styles.LessonSearch}>
      <form className={styles.searchForm}>
        <input 
          type="text" 
         
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          <span className={styles.buttonText}>qidirish</span>

        </button>
      </form>
    </div>

<div className={styles.LessonCards}>

    {
        [1,2,3,4,5,6,7,8,9,10,11,12].map((item)=>(
<LessonCard/>
        ))}
    

</div>
<div className={styles.footer}>
    <p>© David Valentine MD 2020</p>
</div>
</div>
    
</section>

    </div>
  )
}

export default Home