import { useSelector } from 'react-redux';
import ActionButton from '../../../ui/ActionButton/ActionButton';
import BackButton from '../../../ui/BackButton/BackButton';
import styles from './DirectHeader.module.css';

const DirectHeader = () => {
  const user = useSelector((state) => state.user);
  return (
    <header className={styles.header}>
      <BackButton variant='full' />
      {user && <div className={styles.user}>{user.userName}</div>}
      <ActionButton>
        <svg
          fill='currentColor'
          height='24'
          role='img'
          viewBox='0 0 24 24'
          width='24'
        >
          <path
            d='M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952'
            fill='none'
            stroke='currentColor'
          ></path>
          <path
            d='M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z'
            fill='none'
            stroke='currentColor'
          ></path>
          <line
            fill='none'
            stroke='currentColor'
            x1='16.848'
            x2='20.076'
            y1='3.924'
            y2='7.153'
          ></line>
        </svg>
      </ActionButton>
    </header>
  );
};

export default DirectHeader;
