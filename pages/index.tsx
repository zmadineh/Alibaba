import Typography from '@mui/material/Typography/Typography'
import Head from 'next/head'
import Image from 'next/image'
import HelpCard from '../components/home/help-card/HelpCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <title>Create Next App</title>

      <HelpCard />
    </div>
  )
}
