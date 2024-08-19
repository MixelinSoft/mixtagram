import { useSelector } from 'react-redux';
import ActionButton from '../../../ui/ActionButton/ActionButton';
import styles from './ProfileHeader.module.css';
import Icon from '../../../ui/Icon/Icon';

const ProfileHeader = (props) => {
  const user = useSelector((state) => state.user);

  return (
    <header className={styles.header}>
      <ActionButton>
        <Icon icon='gear' />
      </ActionButton>
      <div className={styles.userName}>{user.userName}</div>
      <ActionButton>
        <Icon icon='ampersand' />
      </ActionButton>
    </header>
  );
};

export default ProfileHeader;
