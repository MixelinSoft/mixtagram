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
import getUsers from './services/getUsers';
import LoadingBar from './components/ui/LoadingBar/LoadingBar';
import { loadingActions } from './store/slices/loadingSlice';
import SplashScreen from './components/ui/SplashScreen/SplashScreen';
import { startupActions } from './store/slices/startupSlice';

function App() {
  // Create Dispatch Function
  const dispatchAction = useDispatch();
  // Get Data From Store
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.users.users);
  const showedSplash = useSelector((state) => state.startup.showedSplash);
  console.log(showedSplash);

  // Get User On Load
  useEffect(() => {
    if (!user.userName) {
      dispatchAction(getUser());
    }
  }, [user, dispatchAction, getUser]);
  // Get Users On Load
  useEffect(() => {
    if (users.length === 0) {
      dispatchAction(getUsers());
    }
  }, [users, dispatchAction, getUsers]);
  // Hide SplashScreen After 5 seconds
  useEffect(() => {
    if (!showedSplash) {
      setTimeout(() => {
        dispatchAction(startupActions.setShowedSplash(true));
      }, 2000);
    }
  }, [showedSplash, dispatchAction]);

  return (
    <div className={styles.app}>
      {showedSplash ? (
        <>
          <LoadingBar />
          <Header />
          <Main />
          <Footer />
        </>
      ) : (
        <SplashScreen />
      )}
    </div>
  );
}

export default App;
