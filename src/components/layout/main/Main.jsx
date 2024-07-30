// Import CSS
import { Route, Routes } from 'react-router-dom';
import Feed from '../../pages/feed/Feed';
import styles from './Main.module.css';

const Main = (props) => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/feed' element={<Feed />} />
        {/* Здесь можно добавить другие маршруты */}
      </Routes>
    </main>
  );
};

export default Main;
