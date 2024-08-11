import { useSelector } from 'react-redux';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
  // Get Users From Store
  const users = useSelector((state) => state.users.users);
  // Find User in Users
  const user = users.find((user) => {
    if (user.userId === props.dialog.sender) {
      return user;
    }
  });

  const lastMessage =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo odio blanditiis sapiente eos odit culpa, quas quaerat a est ea consequatur explicabo accusamus amet illo vitae aut exercitationem magni laborum.';

  const lastMessageShort = 'lorem';

  return (
    <div className={styles.container}>
      <div className={styles.userPhoto}>
        <img src={user.userPhoto} alt='' width='56px' height='56px' />
      </div>
      <div className={styles.userNameMessage}>
        <div className={styles.userName}>{user.userName}</div>
        <div className={styles.lastMessage}>
          {lastMessage.length > 24 ? 'long' : 'short'}
          <span className={styles.timeStamp}>{' · 51 нед.'}</span>
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
