import CustomButton from "../../components/CustomButton";
import Header from "../../components/Header";
import styles from "./HomePage.module.scss";
import { CartIcon } from "../../assets/icons/homePageIcons";

// images
import heroIllustration from "../../assets/images/heroIllustration.png";
import aboutImg from "../../assets/images/about.png";
import firstImg from "../../assets/images/first.png";
import secondImg from "../../assets/images/second.png";
import thirdImg from "../../assets/images/third.png";
import Feature from "../../components/Feature";

const features = [
  { 
    id: 1, 
    img: firstImg,
    doesHaveBtn: false,
  },
  { 
    id: 2, 
    img: secondImg,
    doesHaveBtn: false,
  },
  { 
    id: 3, 
    img: thirdImg,
    doesHaveBtn: true,
  },
];

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <Header />
      <div className={styles.wrapper}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heading1}>
              Introduce Your Product Quickly & Effectively
            </h1>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>
            <p className={styles.text}>
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
            <span className={styles.purchaseBtn}>
              <CustomButton w="189px" h="39px">
                Purchase UI Kit
              </CustomButton>
            </span>
            <CustomButton w="189px" h="39px" type="transparent">
              Learn More
            </CustomButton>
          </div>
          <img
            src={heroIllustration}
            className={styles.illustration}
            alt="Hero illustration of designer"
          />
        </section>

        <section className={styles.about}>
          <div className={styles.info}>
            <h2 className={styles.heading2}>Light, Fast & Powerful</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>
            <p className={styles.text}>
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
            <div className={styles.carts}>
              <div className={styles.cart}>
                <CartIcon />
                <h3 className={styles.heading3}>Title Goes Here</h3>
                <p className={styles.cartText}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.{" "}
                </p>
              </div>
              <div className={styles.cart}>
                <CartIcon />
                <h3 className={styles.heading3}>Title Goes Here</h3>
                <p className={styles.cartText}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.{" "}
                </p>
              </div>
            </div>
          </div>
          <img
            src={aboutImg}
            className={styles.img}
            alt="About section image"
          />
        </section>
        {features.map((feature) => (
          <Feature
            key={feature.id}
            img={feature.img}
            doesHaveBtn={feature.doesHaveBtn}
          />
        ))}
      </div>
    </div>
  );
}
