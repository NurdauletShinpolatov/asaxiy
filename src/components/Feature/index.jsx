import CustomButton from "../CustomButton";
import styles from "./Feature.module.scss";

export default function Feature({ img, doesHaveBtn }) {
  return (
    <section className={`${styles.Feature} ${doesHaveBtn ? styles.margin : ''}`}>
      <img src={img} className={styles.img} alt="" />
      <div className={styles.info}>
        <h2 className={styles.heading2}>Light, Fast & Powerful</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </p>
        <p className={styles.text}>
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </p>
        <div className={doesHaveBtn ? styles.btn : styles.hidden}>
          <CustomButton w='150px' h='32px'>
            Purchase Now
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
