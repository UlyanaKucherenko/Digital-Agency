import { RArrowIcon } from '~/components/UI/RArrowIcon';
import styles from './index.module.css';

interface PropsIRButton {
  text: string;
  path: string;
  inverted?: boolean;
}

export const RButton = ({ text, path = '/', inverted = false }: PropsIRButton) => {
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
