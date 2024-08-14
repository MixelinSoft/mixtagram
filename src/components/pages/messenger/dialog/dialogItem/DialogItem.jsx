import { useSelector } from 'react-redux';
import styles from './DialogItem.module.css';
import { Link } from 'react-router-dom';

const DialogItem = (props) => {
  // Get Users From Store
  const users = useSelector((state) => state.users.users);
  // Find User in Users
  const user = users.find((user) => {
    if (user.userId === props.dialog.sender) {
      return user;
    }
  });
  // Get Messages From store
  const messages = useSelector((state) => state.direct);

  const lastMessage =
    props.dialog.messages[props.dialog.messages.length - 1].content;

  return (
    <Link
      to={`/direct/inbox/${props.dialog.dialogId}`}
      className={styles.container}
    >
      {user && (
        <div className={styles.userPhoto}>
          <img src={user.userPhoto} alt='' width='56px' height='56px' />
        </div>
      )}
      <div className={styles.userNameMessage}>
        {user && <div className={styles.userName}>{user.userName}</div>}
        <div className={styles.lastMessage}>
          <div className={styles.message}>{lastMessage}</div>
          <div className={styles.timeStamp}>{' · 51 нед.'}</div>
        </div>
      </div>
      <div className={styles.statusIcon}>
        {props.dialog.isMuted && <Icon icon='muted' />}
        {!props.dialog.isMuted && user && user.isOnline && (
          <div className={styles.statusDot}></div>
        )}
      </div>
    </Link>
  );
};

export default DialogItem;
