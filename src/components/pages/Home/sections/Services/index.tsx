import { RButtonLink } from '~/components/UI/RButtonLink';
import { TitleSection } from '~/components/common/TitleSection';
import { ServicesItem } from '~/components/common/Services/ServicesItem';
import { ServicesList } from './config';

import styles from './index.module.css';

export const Services = () => {
  return (
    <section className={styles.sectionServices}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperTitle}>
          <TitleSection title='we develop digital products' subtitle='our Services' />
          <p className={styles.text}>
            You can discover all our services by clicking the link below.
          </p>
          <RButtonLink text='view all' path='/' />
        </div>

        <div className={styles.list}>
          {ServicesList.map((item) => (
            <ServicesItem key={item.title} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
