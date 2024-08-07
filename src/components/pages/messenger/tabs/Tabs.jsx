import { Link } from 'react-router-dom';
import styles from './Tabs.module.css';

const Tabs = (props) => {
  // Get ActiveTab
  const activeTab = props.currentTab;

  return (
    <div className={styles.container}>
      <Link
        to='/direct/inbox/'
        className={`${styles.link} ${activeTab === 'primary' && styles.active}`}
      >
        Primary
      </Link>
      <Link
        to='/direct/general/'
        className={`${styles.link}  ${
          activeTab === 'general' && styles.active
        }`}
      >
        General
      </Link>
      <Link to='/direct/requests' className={styles.link}>
        Requests
      </Link>
    </div>
  );
};

export default Tabs;
