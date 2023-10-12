import { useEffect, useState } from 'react';
import styles from './index.module.css';
import menuIcon from '~/assets/img/icons/menu-icon.svg';
import closeIcon from '~/assets/img/icons/close-icon.svg';
import { menuList } from './config';
import { ListLine } from '../common/list/ListLine';
import { listSocialNetwork } from '~/utils/const';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sidebarStyleDesktop = {
    transform: menuOpen ? 'translate(0, 0)' : ' translate(-260px, 0)',
    backgroundColor: menuOpen || scrolled ? 'var(--blackHole)' : 'transparent',
  };

  const sidebarStyleMobile = {
    transform: menuOpen ? 'translate(0, 0)' : ' translate(-390px, 0)',
    backgroundColor: menuOpen || scrolled ? 'var(--blackHole)' : 'transparent',
  };

  const sidebarStyle = windowWidth <= 1024 ? sidebarStyleMobile : sidebarStyleDesktop;

  return (
    <div className={styles.sidebar} style={sidebarStyle}>
      {menuOpen ? (
        <button className={styles.btnClose} onClick={toggleMenu}>
          <img src={closeIcon} alt='' width={21} />
        </button>
      ) : (
        <button className={styles.btnMenu} onClick={toggleMenu}>
          <img src={menuIcon} alt='' width={21} />
        </button>
      )}

      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {menuList.map((item) => (
            <li key={item.text} className={styles.menuItem}>
              <a href={item.path}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.sidebarLinks}>
        <ListLine listMenu={listSocialNetwork} vertical />
      </div>
    </div>
  );
};

export default Sidebar;
