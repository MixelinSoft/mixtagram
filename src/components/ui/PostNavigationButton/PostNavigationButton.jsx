// Import Icons
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

// Import CSS
import styles from './PostNavigationButton.module.css';

const PostNavigationButton = (props) => {
  const direction =
    props.direction === 'previous' ? (
      <IoIosArrowDropleftCircle />
    ) : props.direction === 'next' ? (
      <IoIosArrowDroprightCircle />
    ) : (
      '?'
    );

  const classes = `${styles.button} ${props.className}`;

  return (
    <div className={classes}>
      <div className={styles.icon}>{direction}</div>
    </div>
  );
};

export default PostNavigationButton;
