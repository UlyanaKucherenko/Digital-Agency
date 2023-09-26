import styles from './index.module.css';

interface PropsTitleSection {
  title: string;
  subtitle: string;
}

export const SectionVerticalTitle = ({ title, subtitle }: PropsTitleSection) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
    </div>
  );
};
