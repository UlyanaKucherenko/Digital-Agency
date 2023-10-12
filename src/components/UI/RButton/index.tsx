import { useState, useEffect } from 'react';

import styles from './index.module.css';

interface PropsIRButton {
  children: any;
  variant?: 'primary' | 'secondary';
}

export const RButton = ({ children, variant = 'primary' }: PropsIRButton) => {
  const [styledBtn, setStyledBtn] = useState(styles.primary);

  useEffect(() => {
    switch (variant) {
      case 'primary': {
        setStyledBtn(styles.primary);
        break;
      }
      case 'secondary': {
        setStyledBtn(styles.secondary);
        break;
      }
      default:
        break;
    }
  }, [variant]);

  return <button className={`${styles.button} ${styledBtn}`}>{children}</button>;
};
