import ActionButton from '../../ui/ActionButton/ActionButton';
// Import CSS
import styles from './Footer.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Icon from '../../ui/Icon/Icon';
import { clearLocalStorage } from '../../../utils/clearLocalStorage';

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
      behavior: 'smooth',
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

      <ActionButton
        onClick={() => {
          clearLocalStorage();
          alert('Хранилище Очищено!');
        }}
      >
        <Icon icon='reels' />
      </ActionButton>

      <ActionButton onClick={() => navigateHandler('/direct')}>
        <Icon icon='direct' />
      </ActionButton>

      <ActionButton
        className={`${styles.profile} ${
          location.pathname === '/' + user.userName && styles.profileActive
        }`}
        onClick={() => navigateHandler(`/${user.userName}`)}
      >
        <img src={user.userPhoto} width='24px' height='24px' />
      </ActionButton>
    </div>
  );
};

export default Footer;
