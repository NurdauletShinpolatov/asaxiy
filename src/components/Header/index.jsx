import { Link } from 'react-router'
import styles from './Header.module.scss'

export default function Header() {
  return(
    <header className={styles.Header}>
      <nav className={styles.nav}>
        <Link className={styles.links}>Home</Link>
        <Link className={styles.links}>About</Link>
        <Link className={styles.links}>Contact</Link>
      </nav>
      <h2 className={styles.brandName}>Landing</h2>
      <button className={styles.ctaButton}>Buy Now</button>
    </header>
  )
}