import ActionButton from '../../../ui/ActionButton/ActionButton';
import Icon from '../../../ui/Icon/Icon';
import Logo from '../Logo';

import styles from './FeedHeader.module.css';

const FeedHeader = (props) => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.actions}>
        <ActionButton className={styles.actionButton}>
          <Icon icon='plus' />
        </ActionButton>
        <ActionButton>
          <Icon icon='heart' />
        </ActionButton>
      </div>
    </header>
  );
};

export default FeedHeader;
