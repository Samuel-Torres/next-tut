import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import Button from '@/components/button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          fill={true}  
          alt=''
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
            <h1 className={styles.title}>Who Are We?</h1>
            <p className={styles.description}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many 
            <br />
            <br />
            desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
        <div className={styles.item}>
            <h1 className={styles.title}>What We Do?</h1>
            <p className={styles.description}>
              Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
              <br/>
              <br/>
              - Dynamic Websites
              <br/>
              <br/>
              - Fast and Handy
              <br/>
              <br/>
              - Mobile Apps
            </p>
            <Button text="contact" url="contact" />
        </div>
      </div>
    </div>
  )
}

export default About