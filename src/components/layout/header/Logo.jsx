// Import CSS
import styles from './Logo.module.css';
const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.text}>Mixtagram</div>
      <div className={styles.button}>
        <svg
          fill='currentColor'
          height='12'
          role='img'
          viewBox='0 0 24 24'
          width='12'
        >
          <path d='M12 17.502a1 1 0 0 1-.707-.293l-9-9.004a1 1 0 0 1 1.414-1.414L12 15.087l8.293-8.296a1 1 0 0 1 1.414 1.414l-9 9.004a1 1 0 0 1-.707.293Z'></path>
        </svg>
      </div>
    </div>
  );
};

export default Logo;
