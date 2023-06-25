"use client"
import React, { useState, useEffect } from 'react'
import styles from "./page.module.css";
import useSWR from 'swr'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Dashboard = () => {
  // const [ data, setData ] = useState([]);
  // const [ err, setErr ] = useState(false);
  // const [ isLoading, setIsLoading ] = useState(false);

  // Look into React Query instead of using useEffect.
  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: "no-store"
  //     })

  //     if (!res.ok) {
  //       setErr(true)
  //     }

  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   }
  //   getData();
  // }, [])

  // SWR HOOK:
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

  return (
    <div>
      <h1 className={styles.container}>
        Dashboard
      </h1>
    </div>
  )
}

export default Dashboard