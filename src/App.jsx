// Import Hooks
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Import Components
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Main from './components/layout/main/Main';
// Import CSS
import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import getUser from './services/getUser';

function App() {
  // Create Dispatch Function
  const dispatchAction = useDispatch();
  const user = useSelector((state) => state.user);
  // Get User On Startup
  useEffect(() => {
    if (!user.userName) {
      dispatchAction(getUser());
    }
  }, [user, dispatchAction]);

  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
