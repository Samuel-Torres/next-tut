import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';

const Footer = () => {

    console.log("hello")
  return (
    <div className={styles.container}>
        <div>©2023 Lamamia. All rights reserved</div>
        <div className={styles.socialContainer}>
            <Image src="/facebook.png" width={15} height={15} className={styles.icon} alt="Lama Dev facebook" />
            <Image src="/instagram.png" width={15} height={15} className={styles.icon} alt="Lama Dev instagram" />
            <Image src="/twitter.png" width={15} height={15} className={styles.icon} alt="Lama Dev twitter" />
            <Image src="/youtube.png" width={15} height={15} className={styles.icon} alt="Lama Dev youtube" />
        </div>
    </div>
  )
}

export default Footer