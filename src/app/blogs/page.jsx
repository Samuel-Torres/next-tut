import React from 'react'
import styles from "./page.module.css";
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data', res.status, res.statusText)
  }
 
  return res.json()
}


const Blogs = async() => {
  const data = await getData();

  console.log("DATA: ", data)
  return (
    <div className={styles.mainContainer}>

      {data.map(item => (
        <Link key={item._id} href={`/blogs/${item._id}`} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}

    </div>
  )
}

export default Blogs