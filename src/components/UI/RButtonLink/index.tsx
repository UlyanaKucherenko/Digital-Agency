import styles from './index.module.css';
import { RArrowIcon } from '../Svg/RArrowIcon';

interface PropsIRButtonLink {
  text?: string;
}

export const RButtonLink = ({ text }: PropsIRButtonLink) => {
  return (
    <a href='/' className={styles.buttonLink}>
      <span className={styles.buttonLinkText}>{text}</span>
      <RArrowIcon iconClass={styles.buttonLinkText} />
    </a>
  );
};
