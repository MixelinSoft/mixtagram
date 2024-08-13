import { useSelector } from 'react-redux';
import ActionButton from '../../../ui/ActionButton/ActionButton';
import BackButton from '../../../ui/BackButton/BackButton';
import styles from './InboxHeader.module.css';

const InboxHeader = (props) => {
  // Get Dialogs From Store
  const dialogs = useSelector((state) => state.direct.primary);
  // Get Users From Store
  const users = useSelector((state) => state.users.users);

  const dialog = dialogs.find((dialog) => {
    if (dialog.dialogId === props.dialog) {
      return dialog;
    }
  });

  const user = users.find((user) => {
    if (user.userId === dialog.sender) {
      return user;
    }
  });

  return (
    <header className={styles.header}>
      {user && (
        <div className={styles.userInfo}>
          <BackButton variant='full' />
          <div className={styles.userPhoto}>
            <img
              src={user.userPhoto}
              alt='userPhoto'
              width='24px'
              height='24px'
            />
          </div>
          <div className={styles.userName}>{user.userName}</div>
        </div>
      )}
      <ActionButton>
        <svg fill='currentColor' height='24' viewBox='0 0 24 24' width='24'>
          <circle
            cx='12.001'
            cy='12.005'
            fill='none'
            r='10.5'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
          ></circle>
          <circle cx='11.819' cy='7.709' r='1.25'></circle>
          <line
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            x1='10.569'
            x2='13.432'
            y1='16.777'
            y2='16.777'
          ></line>
          <polyline
            fill='none'
            points='10.569 11.05 12 11.05 12 16.777'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
          ></polyline>
        </svg>
      </ActionButton>
    </header>
  );
};

export default InboxHeader;
