import styles from './index.module.css';
import subtitleIcon from '~/assets/img/icons/subtitle-icon.svg';

interface PropsTitleSection {
  title: string;
  subtitle: string;
}

export const TitleSection = ({ title, subtitle }: PropsTitleSection) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.subtitle}>
        <img src={subtitleIcon} alt='' className={styles.iconSubtitle} />
        {subtitle}
      </h3>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};
