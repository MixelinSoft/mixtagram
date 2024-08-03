// Import CSS
import { Route, Routes, useNavigate } from 'react-router-dom';
import Feed from '../../pages/feed/Feed';
import styles from './Main.module.css';
import Comments from '../../pages/feed/comments/comments/Comments';
import { useEffect } from 'react';
import Messenger from '../../pages/messenger/Messenger';

const Main = (props) => {
  // Create Navigation Function
  const navigate = useNavigate();
  // Redirect to Feed on Startup
  useEffect(() => {
    navigate('/feed/');
  }, []);
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/feed' element={<Feed />} />
        <Route path='/direct/' element={<Messenger />} />
        <Route path='/feed/:postId/comments/' element={<Comments />} />
      </Routes>
    </main>
  );
};

export default Main;
