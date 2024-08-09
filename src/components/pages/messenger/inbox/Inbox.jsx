import Tabs from '../tabs/Tabs';
import styles from './Inbox.module.css';

const Inbox = (props) => {
  const messages = [
    {
      userId: 'tob733',
      messages: [{}],
    },
  ];

  return (
    <div>
      <Tabs currentTab='primary' />
      <div className={styles.Messages}>messages</div>
    </div>
  );
};

export default Inbox;
