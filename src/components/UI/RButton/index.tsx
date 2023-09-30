import styles from './index.module.css';

interface PropsIRButton {
  text: string;
  inverted?: boolean;
}

export const RButton = ({ text, inverted = false }: PropsIRButton) => {
  const stylesBtn = inverted ? styles.secondary : styles.primary;

  return <button className={`${styles.button} ${stylesBtn}`}>{text}</button>;
};
