import { RInput } from '~/components/UI/form/RInput';
import styles from './index.module.css';
import { RButton } from '~/components/UI/RButton';

export const FormSubscribe = () => {
  return (
    <form className={styles.form}>
      <div>
        <h3 className={styles.title}>Always Be in touch</h3>
        <p className={styles.text}>
          Subscribe if you want always to be known about all the news and available propositions.
        </p>
      </div>
      <div>
        <div className={styles.wrapInput}>
          <RInput placeholder='Enter your email' />
          <RButton>Subscribe</RButton>
        </div>
        <label>
          <input type='checkbox' />
          <span className={styles.textCheckbox}>
            I accept all <span className={styles.terms}>Terms and Conditions</span>
          </span>
        </label>
      </div>
    </form>
  );
};
