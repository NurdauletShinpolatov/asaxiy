import { Link } from 'react-router'
import styles from './Header.module.scss'
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return(
    <header className={`${styles.Header} ${scrolled ? styles.scrolled : ''}`}>
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