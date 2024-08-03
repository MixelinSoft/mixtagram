// Import Hooks
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
// Import Components
import Inbox from './inbox/Inbox';
// Import CSS
import styles from './Messenger.module.css';

const Messenger = (props) => {
  // Create Navigate Function
  const navigate = useNavigate();
  // Navigate To Inbox On Load
  useEffect(() => {
    navigate('/direct/inbox/');
  }, []);

  return (
    <div>
      <div>lalalalalal</div>
      <Routes>
        
      </Routes>
    </div>
  );
};

export default Messenger;
