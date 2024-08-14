import { useSelector } from 'react-redux';
import ActionButton from '../../../ui/ActionButton/ActionButton';
import BackButton from '../../../ui/BackButton/BackButton';
import styles from './InboxHeader.module.css';
import Icon from '../../../ui/Icon/Icon';

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
        <Icon icon='info' />
      </ActionButton>
    </header>
  );
};

export default InboxHeader;
