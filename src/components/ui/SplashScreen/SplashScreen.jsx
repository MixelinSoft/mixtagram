import styles from './SplashScreen.module.css';

import splashLogo from '../../../assets/images/splashLogo.webp';

const SplashScreen = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={splashLogo} alt='Logo' width='70vw' />
      </div>
      <div className={styles.from}>from</div>
      <div className={styles.developer}>Mixelinsoft</div>
    </div>
  );
};

export default SplashScreen;
