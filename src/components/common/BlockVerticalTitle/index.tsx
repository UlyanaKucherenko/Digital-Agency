import styles from './index.module.css';

interface PropsTitleSection {
  title: string;
  subtitle: string;
}

export const BlockVerticalTitle = ({ title, subtitle }: PropsTitleSection) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <span className={styles.subtitle}>{subtitle}</span>
    </div>
  );
};
