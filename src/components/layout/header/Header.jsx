// Import Components
import Logo from './Logo';
import ActionButton from '../../ui/ActionButton/ActionButton';
// Import Icons
import { TbSquareRoundedPlus } from 'react-icons/tb';
import { FaRegHeart } from 'react-icons/fa';
// Import CSS
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.actions}>
        <ActionButton>
          <TbSquareRoundedPlus />
        </ActionButton>
        <ActionButton>
          <FaRegHeart />
        </ActionButton>
      </div>
    </header>
  );
};

export default Header;
