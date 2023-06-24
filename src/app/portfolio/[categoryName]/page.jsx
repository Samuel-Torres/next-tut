import React from 'react'
import styles from "./page.module.css";
import Button from '@/components/button/Button';
import Image from 'next/image';

const Category = ({ params }) => {
  console.log("param:", params)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.categoryName}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className=''>Test</h1>
          <p className=''>Text</p>
          <Button 
            text="See More"
            url="#"
          />
        </div>
        <div className={styles.imageContainer}></div>
          <Image
            src=""
            alt=""
          />
      </div>
    </div>
  )
}

export default Category