// Import CSS
import Feed from '../../pages/feed/Feed';
import styles from './Main.module.css';

const Main = (props) => {
  return (
    <main className={styles.main}>
      <Feed />
    </main>
  );
};

export default Main;
