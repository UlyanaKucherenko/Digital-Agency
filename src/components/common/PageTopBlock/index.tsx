import { ListLine } from '~/components/common/list/ListLine';
import styles from './index.module.css';

interface IPageTitle {
  title: string;
  listLinks?: string[];
}

export const PageTitleBlock = ({ title, listLinks }: IPageTitle) => {
  return (
    <div className={styles.wrapperTop}>
      <div className={styles.bigPageTitle}>{title}</div>
      <div className={styles.wrapperInfoTop}>
        <h1 className={styles.pageTitle}>{title}</h1>
        <ListLine listMenu={listLinks} />
      </div>
    </div>
  );
};
