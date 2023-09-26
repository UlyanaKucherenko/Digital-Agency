import styles from './index.module.css';
import logo from '~/assets/img/header/logo-header.svg';
import logoTel from '~/assets/img/header/smartphone.svg';

const Heder = () => {
  return (
    <header className={styles.header}>
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
            <button>Get a quote</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Heder;
