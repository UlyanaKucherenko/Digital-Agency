import arrowIcon from '~/assets/img/icons/arrow-btn-icon.svg';

import styles from './index.module.css';

interface PropsIRButtonLink {
  text?: string;
}

export const RButtonLink = ({ text }: PropsIRButtonLink) => {
  return (
    <a href='/' className={styles.buttonLink}>
      <span className={styles.buttonLinkText}>{text}</span>
      <img src={arrowIcon} alt='' className='styles.buttonLinkIcon' />
    </a>
  );
};
