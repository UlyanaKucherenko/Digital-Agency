import styles from './index.module.css';

interface PropsListLine {
  listMenu: string[] | any;
  vertical?: boolean;
}

export const ListLine = ({ listMenu, vertical = false }: PropsListLine) => {
  const menuStyle = vertical ? styles.menuVertical : styles.menu;
  const itemStyles = vertical ? styles.menuItemVertical : styles.menuItem;

  return (
    <ul className={menuStyle}>
      {listMenu.map((item: string) => (
        <li key={item} className={itemStyles}>
          <a href='/'>{item}</a>
        </li>
      ))}
    </ul>
  );
};
