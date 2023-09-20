import styles from './index.module.scss';

interface PropsPost {
  title: string;
  userName: string;
  date: string;
}

export const Post = ({ title, userName, date }: PropsPost) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__img}>
        <img src='' alt='' />
      </div>
      <div className={styles.post__info}>
        <div>{userName}</div>
        <div>{date}</div>
      </div>
      <h4 className={styles.post__title}>{title}</h4>
    </div>
  );
};
