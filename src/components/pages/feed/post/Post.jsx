import styles from './Post.module.css';

// Import Icons
import { MdVerified } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';

// Teset
import creatorImage from '../../../../assets/images/profile/profileImage.webp';
import imageSrc from '../../../../assets/images/feed/img001.jpg';

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
          <BsThreeDots />
        </div>
      </header>
      <div className={styles.image}>
        <img src={imageSrc} alt='' width='100%' />
      </div>
      <div className={styles.actions}></div>
      <div className={styles.likes}></div>
      <div className={styles.description}></div>
      <div className={styles.comments}></div>
      <div className={styles.timeStamp}></div>
    </div>
  );
};

export default Post;
