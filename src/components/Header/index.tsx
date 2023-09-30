import { useEffect, useState } from 'react';

import styles from './index.module.css';
import logo from '~/assets/img/header/logo-header.svg';
import logoTel from '~/assets/img/header/smartphone.svg';
import { RButton } from '~/components/UI/RButton';

const Heder = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerScrolled = scrolled ? styles.scrolled : {};

  return (
    <header className={`${styles.header} ${headerScrolled}`}>
      <div className={styles.container}>
        <a href='/'>
          <img src={logo} alt='Logo' className={styles.headerLogo} />
        </a>

        <div className={styles.headerInfo}>
          <div className={styles.headerTel}>
            <img src={logoTel} alt='' />
            <a href='tel:+1 547 125 89 65'>+1 547 125 89 65</a>
          </div>
          <div>
            <RButton text='Get a quote' inverted />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Heder;
