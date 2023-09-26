import styles from './index.module.css';

interface IVerticalTitle {
  bigTitle: string;
  title: string;
  color?: string;
}

export const VerticalTitle = ({
  bigTitle,
  title,
  color = 'var(--white--color)',
}: IVerticalTitle) => {
  return (
    <div className={styles.decorate} style={{ color: `${color}` }}>
      <div className={styles.decorateBigTitle}>{bigTitle}</div>
      <div className={styles.decorateTitle}>{title}</div>
    </div>
  );
};
