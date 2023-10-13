import Link from 'next/link'
import styles from '@/styles/navbar.module.css'


const Navbar = () => {
  return (
    <>
    <ul className={styles['list']}>
    <li><Link href='/'  className= {'list'}>home page </Link></li>
    <li><Link href='/articles'> articles</Link></li>
    <li><Link href='/profile'> profile</Link></li>
    </ul>
    </>
  )
}

export default Navbar
