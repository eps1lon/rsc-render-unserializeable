import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  // all these return values cause
  // SyntaxError: "undefined" is not valid JSON
  return <></>
  // return undefined
}
