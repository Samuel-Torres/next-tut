import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.description}>Turning your idea into Reality. We bring together the teams from the global tech industry.</p>
        <button className={styles.btn}>See Our Works</button>
      </div>
      <div className={styles.item}>
        <Image src="/hero.png" alt='hero' width={500} height={500}/>
      </div>
    </div>
  )
}
