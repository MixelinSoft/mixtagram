import ActionButton from '../../ui/ActionButton/ActionButton';

// Import Icons
import { FiSearch } from 'react-icons/fi';
import { RiMessengerLine } from 'react-icons/ri';
// Import CSS
import styles from './Footer.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Icon from '../../ui/Icon/Icon';

const Footer = () => {
  // Get Location
  const location = useLocation();
  // Create Navigation Function
  const navigate = useNavigate();
  // Get User From Store
  const user = useSelector((state) => state.user);

  // Navigation Handler
  const navigateHandler = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавная прокрутка
    });
  };

  return (
    <div
      className={`${styles.footer} ${
        location.pathname.includes('/direct/') && styles.hide
      }`}
    >
      <ActionButton onClick={() => navigateHandler('/feed/')}>
        <Icon
          icon='home'
          fill={location.pathname === '/feed/' ? 'black' : 'white'}
        />
      </ActionButton>

      <ActionButton>
        <Icon icon='search' />
      </ActionButton>

      <ActionButton>
        <Icon icon='reels' />
      </ActionButton>

      <ActionButton onClick={() => navigateHandler('/direct')}>
        <Icon icon='direct' />
      </ActionButton>

      <ActionButton className={styles.profile}>
        <img src={user.userPhoto} width='24px' height='24px' />
      </ActionButton>
    </div>
  );
};

export default Footer;
