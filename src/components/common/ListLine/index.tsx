import styles from './index.module.css';

interface PropsListLine {
  listMenu: string[] | any;
  vertical?: boolean;
}

export const ListLine = ({ listMenu, vertical = false }: PropsListLine) => {
  const MenuStyle = vertical ? styles.menuVertical : styles.menu;
  const ItemStyles = vertical ? styles.menuItemVertical : styles.menuItem;

  return (
    <ul className={MenuStyle}>
      {listMenu.map((item: string) => (
        <li key={item} className={ItemStyles}>
          <a href='/'>{item}</a>
        </li>
      ))}
    </ul>
  );
};
