// Import Hooks
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Import Components
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Main from './components/layout/main/Main';
// Import CSS
import styles from './App.module.css';

function App() {
  // Create Navigation Function
  const navigate = useNavigate();
  // Redirect to Feed on Startup
  useEffect(() => {
    navigate('/feed/');
  }, [navigate]);

  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
