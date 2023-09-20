import styles from './index.module.scss';

interface PropsTitleSection {
  title: string;
  subtitle: string;
}

export const TitleSection = ({ title, subtitle }: PropsTitleSection) => {
  return (
    <div className={styles.titleSection}>
      <h3 className={styles.titleSection__subtitle}>
        <span className={styles.titleSection__icon}>icon</span>
        {subtitle}
      </h3>
      <h2 className={styles.titleSection__title}>{title}</h2>
    </div>
  );
};
