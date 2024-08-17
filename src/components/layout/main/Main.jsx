// Import CSS
import { Route, Routes, useNavigate } from 'react-router-dom';
import Feed from '../../pages/feed/Feed';
import styles from './Main.module.css';
import Comments from '../../pages/feed/comments/comments/Comments';
import { useEffect } from 'react';
import Messenger from '../../pages/messenger/Messenger';
import Inbox from '../../pages/messenger/inbox/Inbox';
import Requests from '../../pages/messenger/requests/Requests';
import General from '../../pages/messenger/general/General';
import { useSelector } from 'react-redux';
import DialogContainer from '../../pages/messenger/dialog/dialogContainer/DialogContainer';

const Main = (props) => {
  // Create Navigation Function
  const navigate = useNavigate();
  // Get Dialogs From Store
  const directDialogs = useSelector((state) => state.direct.primary);
  // Redirect to Feed on Load App
  useEffect(() => {
    navigate('/feed/');
  }, []);

  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/feed' element={<Feed />} />
        <Route path='/feed/:postId/comments/' element={<Comments />} />
        <Route path='/direct/' element={<Messenger />} />
        <Route path='/direct/inbox/' element={<Inbox />} />
        <Route path='/direct/requests/' element={<Requests />} />
        <Route path='/direct/general/' element={<General />} />
        {/* Create Routes For Dialogs */}
        {directDialogs.length > 0 &&
          directDialogs.map((dialog) => (
            <Route
              path={`/direct/inbox/${dialog.dialogId}/`}
              element={<DialogContainer dialog={dialog} />}
              key={dialog.dialogId}
            />
          ))}
      </Routes>
    </main>
  );
};

export default Main;
