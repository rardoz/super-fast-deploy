import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>{process.env.NEXT_PUBLIC_HELLO_MSG || 'ENV does not say hello :('}</h1>
      <p>
        This is an example app!
      </p>
    </div>
  )
}

export default Home
