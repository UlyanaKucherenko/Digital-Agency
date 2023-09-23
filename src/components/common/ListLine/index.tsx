import styles from './index.module.css';

interface PropsListLine {
  listMenu: string | any;
}

export const ListLine = ({ listMenu }: PropsListLine) => {
  return (
    <ul className={styles.menu}>
      {listMenu.map((item: string) => (
        <li key={item} className={styles.menuItem}>
          <a href='/'>{item}</a>
        </li>
      ))}
    </ul>
  );
};
