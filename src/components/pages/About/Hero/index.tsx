import { TitleSection } from '~/components/common/TitleSection';
import hero from '~/assets/img/pages/about/hero/hero-about.jpg';
import styles from './index.module.css';
import { PageTitleBlock } from '~/components/common/PageTopBlock';
import { routes } from '~/routes';

const links = [
  { text: 'Home', path: routes.home },
  { text: 'About', path: '/about' },
];

export const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <PageTitleBlock title='about us' listLinks={links} />
      <div className={styles.container}>
        <div className={styles.imgWrap}>
          <img src={hero} alt='hero-about' />
        </div>
        <div className={styles.infoBlock}>
          <TitleSection subtitle='what we do' title='We Are Digital Team of Professionals' />
          <p className={styles.text}>
            Our web design company specializes in the professional creation of unique sites and
            mobile applicatoins.
          </p>
          <p className={styles.text}>
            The approach to each new project is individual, we treat equally every customer,
            regardless of the size of the company and its budget. Our web design company specializes
            in the professional creation of unique sites.
          </p>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.listItemNumber}>
                365<span>+</span>
              </div>
              <div className={styles.listItemText}>Satisfied clients</div>
            </li>
            <li className={styles.listItem}>
              <div className={styles.listItemNumber}>
                365<span>+</span>
              </div>
              <div className={styles.listItemText}>Satisfied clients</div>
            </li>
            <li className={styles.listItem}>
              <div className={styles.listItemNumber}>
                365<span>+</span>
              </div>
              <div className={styles.listItemText}>Satisfied clients</div>
            </li>
            <li className={styles.listItem}>
              <div className={styles.listItemNumber}>
                365<span>+</span>
              </div>
              <div className={styles.listItemText}>Satisfied clients</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
function useRoute() {
  throw new Error('Function not implemented.');
}
