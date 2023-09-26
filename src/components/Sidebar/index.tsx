import { useState } from 'react';
import styles from './index.module.css';
import menuIcon from '~/assets/img/icons/menu-icon.svg';
import closeIcon from '~/assets/img/icons/close-icon.svg';
import { Menu } from './config';
import { ListLine } from '../common/ListLine';
import { ListSocialNetwork } from '~/utils/const';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sidebarStyle = {
    left: menuOpen ? '0' : '-260px',
  };

  return (
    <div className={styles.sidebar} style={sidebarStyle}>
      <button className={styles.btnMenu} onClick={() => toggleMenu()}>
        <img src={menuOpen ? closeIcon : menuIcon} alt='' width={21} />
      </button>

      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {Menu.map((item) => (
            <li key={item.text} className={styles.menuItem}>
              <a href={item.path}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.sidebarLinks}>
        <ListLine listMenu={ListSocialNetwork} vertical />
      </div>
    </div>
  );
};

export default Sidebar;
