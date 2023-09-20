import logo from '~/assets/img/logo.svg';
import styles from './index.module.scss';
import { ListLine } from '../common/ListLine';

const listMenu = ['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'BLOG', 'CONTACT US'];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__menu}>
          <img src={logo} alt='Logo' className={styles.footer__logo} />
          <ListLine listMenu={listMenu} />
        </div>
        <div className={styles.footer__info}>
          <div className={styles.footer__infoColumn}>
            <div className={styles.footer__infoColumnItem}>
              <ListLine listMenu={['Fb', 'Tw', 'In']} />
            </div>
            <div>© All rights reserved. Digens {new Date().getFullYear()}</div>
          </div>
          <div className={styles.footer__infoColumn}>
            <div>
              <h5 className={styles.footer__infoTitle}>Address:</h5>
              <div className={styles.footer__infoWrapText}>
                <p className={styles.footer__infoText}>27 Division St, New York, NY 10002, USA</p>
              </div>
            </div>
            <div>
              <h5 className={styles.footer__infoTitle}>Hit us up:</h5>
              <div className={styles.footer__infoWrapText}>
                <p className={styles.footer__infoText}>
                  <a className={styles.footer__infoTextLink} href='tel:+1 344 789 07 68'>
                    +1 344 789 07 68
                  </a>
                </p>
                <p className={styles.footer__infoText}>
                  <a className={styles.footer__infoTextLink} href='mailto:info@sitename.com'>
                    info@sitename.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h5 className={styles.footer__infoTitle}>Useful links</h5>
              <div className={styles.footer__infoWrapText}>
                <p className={styles.footer__infoText}>
                  <a className={styles.footer__infoTextLink} href='/'>
                    Help and Support
                  </a>
                </p>
                <p className={styles.footer__infoText}>
                  <a className={styles.footer__infoTextLink} href='/'>
                    Careers
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
