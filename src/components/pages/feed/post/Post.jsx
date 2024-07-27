import styles from './Post.module.css';

// Import Icons
import { MdVerified } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';

// Teset
import creatorImage from '../../../../assets/images/profile/profileImage.webp';
import imageSrc from '../../../../assets/images/feed/img001.jpg';
import ActionButton from '../../../ui/ActionButton/ActionButton';

const Post = ({ post }) => {
  // const imageSrc = props.img;
  // const description = props.description;
  // const comments = props.comments;

  const creator = {
    creatorImage: creatorImage,
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.creator}>
          <div className={styles.creatorImage}>
            <img src={creator.creatorImage} alt='' width='32px' height='32px' />
          </div>
          <div className={styles.creatorInfo}>
            <div className={styles.creatorName}>MarsCuteCat</div>
            {/* <div className={styles.postPlace}></div> */}
          </div>
          <div className={styles.creatorVerificated}>
            <MdVerified />
          </div>
        </div>
        <div className={styles.postActions}>
          <ActionButton>
            <BsThreeDots />
          </ActionButton>
        </div>
      </header>

      <div className={styles.image}>
        <img src={imageSrc} alt='' width='100%' />
      </div>

      <div className={styles.info}>
        <div className={styles.actions}>
          <div className={styles.mainActions}>
            <ActionButton>
              <FaRegHeart />
            </ActionButton>
            <ActionButton>
              <svg viewBox='0 0 24 24' width='24'>
                <path
                  d='M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z'
                  fill='none'
                  stroke='currentColor'
                  stroke-linejoin='round'
                  stroke-width='2'
                ></path>
              </svg>
            </ActionButton>
            <ActionButton>
              <svg viewBox='0 0 24 24' width='24'>
                <title>Поделиться</title>
                <line
                  fill='none'
                  stroke='currentColor'
                  stroke-linejoin='round'
                  stroke-width='2'
                  x1='22'
                  x2='9.218'
                  y1='3'
                  y2='10.083'
                ></line>
                <polygon
                  fill='none'
                  points='11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334'
                  stroke='currentColor'
                  stroke-linejoin='round'
                  stroke-width='2'
                ></polygon>
              </svg>
            </ActionButton>
          </div>
          <div className={styles.bookmark}>
            <ActionButton>
              <svg viewBox='0 0 24 24' width='24'>
                <title>Сохранить</title>
                <polygon
                  fill='none'
                  points='20 21 12 13.44 4 21 4 3 20 3 20 21'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                ></polygon>
              </svg>
            </ActionButton>
          </div>
        </div>

        <div className={styles.likes}>
          <div className={styles.lastLikedProfile}>
            <img src={creatorImage} alt='' width='14px' height='14px' />
          </div>
          <div className={styles.numberOfLikes}>777</div>
          <div className={styles.likeText}>Отметок "Нравится"</div>
        </div>
        <div className={styles.description}>
          <div className={styles.creatorInfo}>
            <span className={styles.creatorName}>MarsCuteCat</span>
            <span className={styles.creatorVerificated}>
              <MdVerified />
            </span>
            <span className={styles.descriptionText}>
              Лежу на стуле - на чиле, на расслабоне.
            </span>
          </div>
        </div>
        <div className={styles.comments}></div>
        <div className={styles.timeStamp}></div>
      </div>
    </div>
  );
};

export default Post;
