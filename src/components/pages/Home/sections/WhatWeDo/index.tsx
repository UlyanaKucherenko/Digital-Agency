import mainImg from '~/assets/img/pages/home/WhatWeDo/main.jpg';
import styles from './index.module.css';
import { TitleSection } from '~/components/common/TitleSection';
import { whatWeDoList } from './config';

export const WhatWeDo = () => {
  return (
    <section className={styles.sectionWhatWeDo}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrap}>
          <img src={mainImg} alt='' />
        </div>
        <div className={styles.infoWrap}>
          <TitleSection title='we develop digital products' subtitle='what we do' />
          <p className={styles.text}>
            We appreciate every client and ready to help with all the issues that they have. Let’s
            figure out what we can do.
          </p>
          <ul className={styles.list}>
            {whatWeDoList.map((item) => (
              <li key={item.id} className={styles.listItem}>
                <div>
                  <div className={styles.percentWrap}>
                    <div className={styles.percentText}>{item.percent}</div>
                  </div>
                </div>
                <div>
                  <h3 className={styles.listItemTitle}>{item.title}</h3>
                  <p className={styles.listItemText}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
