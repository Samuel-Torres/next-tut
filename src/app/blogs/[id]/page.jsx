import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

// async function getData(id) {
//   const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     return notFound()
//   }

//   return res.json();
// }


// export async function generateMetadata({ params }) {

//   const post = await getData(params.id)
//   return {
//     title: post.title,
//     description: post.desc,
//   };
// }

const BlogPost = async ({ params }) => {
  // const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Test</h1>
          {/* <h1 className={styles.title}>{data.title}</h1> */}
          <p className={styles.desc}>
            {/* {data.desc} */}
            description
          </p>
          <div className={styles.author}>
            <Image
              // src={data.img}
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            {/* <span className={styles.username}>{data.username}</span> */}
            <span className={styles.username}>userName</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            // src={data.img}
            src=""
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         {/* {data.content} */}
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
