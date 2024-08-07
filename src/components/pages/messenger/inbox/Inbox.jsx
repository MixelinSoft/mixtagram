import Tabs from '../tabs/Tabs';
import styles from './Inbox.module.css';

const Inbox = (props) => {
  return (
    <div>
      <Tabs currentTab='primary' />
      <div className={styles.Messages}>messages</div>
    </div>
  );
};

export default Inbox;
