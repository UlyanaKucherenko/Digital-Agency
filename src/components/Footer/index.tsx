import logo from '~/assets/img/logo.svg';
import { ListLine } from '~/components/common/ListLine';
import { FooterListMenu, ListSocialNetwork } from '~/utils/const';
import styles from './index.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerMenu}>
          <img src={logo} alt='Logo' className={styles.footerLogo} />
          <ListLine listMenu={FooterListMenu} />
        </div>
        <div className={styles.footerInfo}>
          <div className={styles.footerInfoColumn}>
            <div className={styles.footerInfoColumnItem}>
              <ListLine listMenu={ListSocialNetwork} />
            </div>
            <div>&copy; All rights reserved. Digens {new Date().getFullYear()}</div>
          </div>
          <div className={styles.footerInfoColumn}>
            <div>
              <h5 className={styles.footerInfoTitle}>Address:</h5>
              <div className={styles.footer__infoWrapText}>
                <p className={styles.footer__infoText}>27 Division St, New York, NY 10002, USA</p>
              </div>
            </div>
            <div>
              <h5 className={styles.footerInfoTitle}>Hit us up:</h5>
              <div className={styles.footerInfoWrapText}>
                <p className={styles.footerInfoText}>
                  <a className={styles.footerInfoTextLink} href='tel:+1 344 789 07 68'>
                    +1 344 789 07 68
                  </a>
                </p>
                <p className={styles.footerInfoText}>
                  <a className={styles.footerInfoTextLink} href='mailto:info@sitename.com'>
                    info@sitename.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h5 className={styles.footerInfoTitle}>Useful links</h5>
              <div className={styles.footerInfoWrapText}>
                <p className={styles.footerInfoText}>
                  <a className={styles.footerInfoTextLink} href='/'>
                    Help and Support
                  </a>
                </p>
                <p className={styles.footerInfoText}>
                  <a className={styles.footerInfoTextLink} href='/'>
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
