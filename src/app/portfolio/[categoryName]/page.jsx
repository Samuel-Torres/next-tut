import React from 'react'
import styles from "./page.module.css";
import Button from '@/components/button/Button';
import Image from 'next/image';
import { items } from './data';
import { notFound } from 'next/navigation';

const getData = (cat) => {
  const data = items[cat];
  console.log("INCOMING: ", data)

  if(data) {
    return data
  }
  return notFound();
}

const Category = ({ params }) => {
  console.log("ALL PARAMS:", params)
  const data = getData(params.categoryName);
  
  console.log("param:", params)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.categoryName}</h1>
      {data.map(item => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc} >{item.desc}</p>
            <Button 
              text="See More"
              url="#"
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
              />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category