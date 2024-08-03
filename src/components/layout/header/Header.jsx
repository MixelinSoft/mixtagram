// Import Components
import Logo from './Logo';
import ActionButton from '../../ui/ActionButton/ActionButton';
// Import Icons
import { TbSquareRoundedPlus } from 'react-icons/tb';
import { FaRegHeart } from 'react-icons/fa';
// Import CSS
import styles from './Header.module.css';
import { useLocation } from 'react-router-dom';
import BackButton from '../../ui/BackButton/BackButton';
import { useSelector } from 'react-redux';

const Header = () => {
  // Get Location From URL
  const location = useLocation();
  // Get User  From Store
  const user = useSelector((state) => state.user);
  // Return Header
  if (location.pathname === '/feed/') {
    return (
      <header className={styles.header}>
        <Logo />
        <div className={styles.actions}>
          <ActionButton className={styles.actionButton}>
            <svg fill='currentColor' height='24' viewBox='0 0 24 24' width='24'>
              <path
                d='M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
              ></path>
              <line
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                x1='6.545'
                x2='17.455'
                y1='12.001'
                y2='12.001'
              ></line>
              <line
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                x1='12.003'
                x2='12.003'
                y1='6.545'
                y2='17.455'
              ></line>
            </svg>
          </ActionButton>
          <ActionButton>
            <svg fill='currentColor' height='24' viewBox='0 0 24 24' width='24'>
              <path d='M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z'></path>
            </svg>
          </ActionButton>
        </div>
      </header>
    );
  } else if (location.pathname.includes('/comments')) {
    return (
      <div className={styles.header}>
        <BackButton />
        <div className={styles.headerTitle}>Комментарии</div>
      </div>
    );
  } else if (location.pathname === '/direct/') {
    return (
      <div className={`${styles.header} ${styles.directHeader}`}>
        <BackButton />
        <div className={styles.user}>username</div>
        <ActionButton>
          <SVGAnimatedAngle
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
          </SVGAnimatedAngle>
        </ActionButton>
      </div>
    );
  }
};

export default Header;
