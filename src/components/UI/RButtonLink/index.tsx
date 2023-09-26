import styles from './index.module.css';
import { RArrowIcon } from '../RArrowIcon';

interface PropsIRButtonLink {
  text?: string;
  path: string;
  inverted?: boolean;
}

export const RButtonLink = ({ text, path = '/', inverted = false }: PropsIRButtonLink) => {
  const fillBlack = inverted ? 'var(--closedShutter)' : 'var(--white-color)';
  const textBlack = inverted ? { color: 'var(--closedShutter)' } : {};

  return (
    <a href={path} className={styles.buttonLink}>
      <span className={styles.buttonLinkText} style={textBlack}>
        {text}
      </span>
      <RArrowIcon iconClass={styles.buttonLinkText} fill={fillBlack} />
    </a>
  );
};
