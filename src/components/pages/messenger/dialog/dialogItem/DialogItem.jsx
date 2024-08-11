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

  const lastMessage = props.dialog.messages.slice(-1)[0].content;

  return (
    <div className={styles.container}>
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
      <div className={styles.muteIcon}>
        {props.dialog.isMuted && (
          <svg
            fill='currentColor'
            height='15'
            role='img'
            viewBox='0 0 24 24'
            width='15'
          >
            <path d='M15.209 18.294a1 1 0 0 0-.707-.293H6.184a2.002 2.002 0 0 1-1.74-2.993l.47-.822a8.34 8.34 0 0 0 1.093-4.174c0-.159.005-.316.017-.471a1 1 0 1 0-1.994-.15 8.093 8.093 0 0 0-.023.63 6.341 6.341 0 0 1-.83 3.175l-.47.822a4.001 4.001 0 0 0 3.477 5.983h1.944a4 4 0 0 0 7.827-.382 1 1 0 0 0-.282-.86Zm-3.207 2.708a2 2 0 0 1-1.732-1.001h3.463a2.017 2.017 0 0 1-1.731 1.001Zm11.205.291-2.521-2.521a4.04 4.04 0 0 0 .976-1.629 3.957 3.957 0 0 0-.356-3.123l-.484-.853A6.358 6.358 0 0 1 20 9.997a7.953 7.953 0 0 0-4.745-7.302 3.972 3.972 0 0 0-6.51.002 8.011 8.011 0 0 0-2.438 1.697L2.707.793a1 1 0 0 0-1.414 1.414l20.5 20.5a1 1 0 0 0 1.414-1.414Zm-3.46-4.728a2.042 2.042 0 0 1-.468.8L7.72 5.805a6.004 6.004 0 0 1 2.068-1.377.998.998 0 0 0 .494-.426 1.976 1.976 0 0 1 3.439 0 1 1 0 0 0 .494.425 5.989 5.989 0 0 1 3.786 5.634 8.303 8.303 0 0 0 1.082 4.094l.483.852a1.975 1.975 0 0 1 .181 1.558Z'></path>
          </svg>
        )}
      </div>
    </div>
  );
};

export default DialogItem;
