// Import Icon
import { IoIosArrowDown } from 'react-icons/io';
// Import CSS
import styles from './Logo.module.css';
const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.text}>Mixtagram</div>
      <div className={styles.button}>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Logo;
