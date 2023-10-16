import { NavLink } from 'react-router-dom';
import styles from './index.module.css';

export interface IListMenu {
  text: string;
  path: string;
}
interface iPropsListLine {
  listMenu: IListMenu[] | [];
  vertical?: boolean;
}

export const ListLine = ({ listMenu = [], vertical = false }: iPropsListLine) => {
  const menuStyle = vertical ? styles.menuVertical : styles.menu;
  const itemStyles = vertical ? styles.menuItemVertical : styles.menuItem;

  return (
    <ul className={menuStyle}>
      {listMenu.map((item: IListMenu) => (
        <li key={item.text} className={itemStyles}>
          <NavLink
            to={item.path}
            style={({ isActive }) => {
              return {
                color: isActive ? 'var(--white-color)' : '',
              };
            }}
          >
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
