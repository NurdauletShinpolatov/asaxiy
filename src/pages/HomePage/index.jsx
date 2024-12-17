import Header from '../../components/Header'
import styles from './HomePage.module.scss'

export default function HomePage() {
  return(
    <div className={styles.HomePage}>
      <Header />
      <div className={styles.wrapper}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heading}>Introduce Your Product Quickly & Effectively</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
            <p className={styles.text}>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          </div>
        </section>
      </div>
    </div>
  )
}