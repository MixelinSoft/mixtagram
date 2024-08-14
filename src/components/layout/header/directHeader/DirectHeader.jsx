import { useSelector } from 'react-redux';
import ActionButton from '../../../ui/ActionButton/ActionButton';
import BackButton from '../../../ui/BackButton/BackButton';
import styles from './DirectHeader.module.css';
import Icon from '../../../ui/Icon/Icon';

const DirectHeader = () => {
  const user = useSelector((state) => state.user);
  return (
    <header className={styles.header}>
      <BackButton variant='full' />
      {user && <div className={styles.user}>{user.userName}</div>}
      <ActionButton>
        <Icon icon='write' />
      </ActionButton>
    </header>
  );
};

export default DirectHeader;
