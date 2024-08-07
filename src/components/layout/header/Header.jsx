// Import Components
import ActionButton from '../../ui/ActionButton/ActionButton';
// Import Icons
import { TbSquareRoundedPlus } from 'react-icons/tb';
import { FaRegHeart } from 'react-icons/fa';
// Import CSS
import styles from './Header.module.css';
import { useLocation } from 'react-router-dom';
import BackButton from '../../ui/BackButton/BackButton';
import { useSelector } from 'react-redux';
import FeedHeader from './feedHeader/FeedHeader';
import CommentsHeader from './commentsHeader/CommentsHeader';
import DirectHeader from './directHeader/DirectHeader';
import RequestsHeader from './requestsHeader/RequestsHeader';

const Header = () => {
  // Get Location From URL
  const location = useLocation();
  // Get User  From Store
  const user = useSelector((state) => state.user);
  // Return Header
  if (location.pathname === '/feed/') {
    return <FeedHeader />;
  } else if (location.pathname.includes('/comments')) {
    return <CommentsHeader />;
  } else if (
    location.pathname === '/direct/inbox/' ||
    location.pathname === '/direct/general/'
  ) {
    return <DirectHeader />;
  } else if (location.pathname === '/direct/requests') {
    return <RequestsHeader />;
  }
};

export default Header;
