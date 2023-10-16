import logo from '~/assets/img/logo.svg';
import shadow from '~/assets/img/shadow-blog.svg';
import wavesImage from '~/assets/img/waves.svg';
import { ListLine } from '~/components/common/list/ListLine';
import { menuData, listSocialNetwork } from '~/utils/const';
import { FooterLinksColumn } from './FooterLinksColumn';
import { usefulLinks, hitUsUpList } from './config';
import styles from './index.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={wavesImage} alt='' className={styles.wavesImg} />
      <div className={styles.footerWrapper}>
        <div className={styles.footerMenu}>
          <img src={logo} alt='Logo' className={styles.footerLogo} />
          <ListLine listMenu={menuData} />
        </div>
        <div className={styles.footerInfo}>
          <div className={styles.footerInfoColumn}>
            <div className={styles.footerInfoColumnItem}>
              <ListLine listMenu={listSocialNetwork} />
            </div>
            <div>&copy; All rights reserved. Digens {new Date().getFullYear()}</div>
          </div>
          <div className={styles.footerInfoColumn}>
            <div>
              <h5 className={styles.footerInfoTitle}>Address:</h5>
              <div className={styles.footerInfoWrapText}>
                <p className={styles.footerInfoText}>27 Division St, New York, NY 10002, USA</p>
              </div>
            </div>
            <FooterLinksColumn title='Hit us up:' list={hitUsUpList} />
            <FooterLinksColumn title='Useful links' list={usefulLinks} />
          </div>
        </div>
      </div>
      <img src={shadow} alt='' className={styles.shadowGradient} />
    </footer>
  );
};
