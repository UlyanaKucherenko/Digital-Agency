import { TitleSection } from '~/components/common/TitleSection';
import styles from './index.module.css';
import { VerticalTitle } from '~/components/common/VerticalTitle';
import img1 from '~/assets/img/pages/about/experts/img1.jpg';
import img2 from '~/assets/img/pages/about/experts/img2.jpg';
import img3 from '~/assets/img/pages/about/experts/img3.jpg';

export const Experts = () => {
  return (
    <section className={styles.sectionExperts}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperTitle}>
          <TitleSection title='Our creative team' subtitle='digital experts' inverted />
        </div>
        <div className={styles.content}>
          {/* slider */}
          <div className={styles.list}>
            <div className={styles.listItem}>
              <img src={img1} alt='' />
            </div>
            <div>
              <img src={img2} alt='' />
            </div>
            <div>
              <img src={img3} alt='' />
            </div>
          </div>
        </div>
      </div>
      <VerticalTitle bigTitle='experts' title='experts' color='var(--blackHole)' />
    </section>
  );
};
