import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ThreeDScene from '../components/threeDScene.jsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>3D Model Viewer</title>
        <meta name="description" content="threeJS test and viewer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.canvas}>
          <ThreeDScene/>
        </div>
      </main>


    </div>
  )
}
