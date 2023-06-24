import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import Button from '@/components/button/Button';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep In Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input 
            type="text" 
            placeholder='name'
            className={styles.input}
          />
          <input 
            type="text" 
            placeholder='email'
            className={styles.input}
          />
          <textarea 
            name="message" 
            id="" 
            cols="30" 
            rows="10"
            className={styles.textArea}
          />
          <Button
            url="#"
            text="Send"
            className='button'
          />
        </form>

      </div>
    </div>
  )
}

export default Contact