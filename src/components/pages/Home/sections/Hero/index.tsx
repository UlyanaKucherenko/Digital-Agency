import styles from './index.module.css';
import mainImg from '~/assets/img/pages/home/hero/main-img.jpg';
import { RButton } from '~/components/UI/RButton';
import { TitleSection } from '~/components/common/TitleSection';

export const Hero = () => {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.wrapper}>
        <div className={styles.columnLeft}>
          <div>
            <img src={mainImg} alt='' className={styles.mainImg} />
          </div>
        </div>
        <div className={styles.slider}>
          <div className={styles.sliderContent}>
            <div className={styles.sliderItem}>
              <div className={styles.wrapperTitle}>
                <TitleSection
                  title='Digital products for your brand'
                  subtitle='more than obvious'
                />
                <p className={styles.text}>
                  Our team is waiting for a new challenge, so we’re ready to make a cool brand.
                </p>
                <RButton>Get more</RButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
