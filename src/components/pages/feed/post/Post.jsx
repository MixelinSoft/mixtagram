import { useSelector } from 'react-redux';
// Import LazyLoad Image Component
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// Import Components
import ActionButton from '../../../ui/ActionButton/ActionButton';
import { Link } from 'react-router-dom';
import VerificationImage from '../../../ui/VerificationImage/VerificationImage';
import Icon from '../../../ui/Icon/Icon';
// Imoirt Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
// Import CSS
import styles from './Post.module.css';
import Button from '../../../ui/Button/Button';

const Post = ({ post, inProfile }) => {
  // Get Users From Store
  const users = useSelector((state) => state.users.users);
  // Find Creator
  const creator = users.find((user) => {
    if (user.userId === post.creatorId) {
      return user;
    }
  });
  // Find Liked Users
  const lastLikedUserPhotos = users
    .filter((user) => post.post.postLikes.lastLikedUsers.includes(user.userId))
    .map((user) => user.userPhoto);

  return (
    <div className={styles.container}>
      {creator && (
        <header className={styles.header}>
          <div className={styles.creator}>
            <div className={styles.creatorImage}>
              <img src={creator.userPhoto} alt='' width='32px' height='32px' />
            </div>
            <div className={styles.creatorInfo}>
              <div className={styles.creatorName}>{creator.userName}</div>
            </div>
            {creator.isVerificated && (
              <div className={styles.creatorVerificated}>
                <VerificationImage />
              </div>
            )}
          </div>
          <div className={styles.postActions}>
            <ActionButton>
              <Icon icon='dots' />
            </ActionButton>
          </div>
        </header>
      )}

      {post && (
        <div className={styles.image}>
          <Swiper
            pagination={true}
            autoHeight
            modules={[Pagination, Navigation]}
          >
            {post.post.postImages.map((image) => (
              <SwiperSlide key={image}>
                <LazyLoadImage
                  src={image}
                  alt='Post Image'
                  effect='blur'
                  width='100%'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {inProfile && (
        <div className={styles.profileButtons}>
          <Button variant='transparentBlue'>Статистика</Button>
          <Button variant='blue'>Продвигать публикацию</Button>
        </div>
      )}
      <div className={styles.info}>
        <div className={styles.actions}>
          <div className={styles.mainActions}>
            {/* Like Button */}
            <ActionButton className={styles.actionButton}>
              <Icon icon='heart' />
            </ActionButton>
            {/* Comments Button */}
            <ActionButton className={styles.actionButton}>
              <Icon icon='comments' />
            </ActionButton>
            {/* Send Button */}
            <ActionButton className={styles.actionButton}>
              <Icon icon='share' />
            </ActionButton>
          </div>
          <div className={styles.bookmark}>
            {/* Bookmark Button */}
            <ActionButton>
              <Icon icon='bookmark' />
            </ActionButton>
          </div>
        </div>

        {post && (
          <div className={styles.likes}>
            <div className={styles.likesUsers}>
              {lastLikedUserPhotos.map((user) => {
                return (
                  <div key={user} className={styles.lastLikedProfile}>
                    <img
                      src={user}
                      alt='user photo'
                      width='14px'
                      height='14px'
                    />
                  </div>
                );
              })}
            </div>

            <div className={styles.numberOfLikes}>
              {post.post.postLikes.numberOfLikes}
            </div>
            <div className={styles.likeText}>Отметок "Нравится"</div>
          </div>
        )}

        {post && creator && (
          <div className={styles.description}>
            <div className={styles.creatorInfo}>
              <span className={styles.creatorName}>{creator.userName}</span>
              <span className={styles.creatorVerificated}>
                <VerificationImage />
              </span>
              <span className={styles.descriptionText}>
                {post.post.postDescription}
              </span>
            </div>
          </div>
        )}

        {post && (
          <Link
            to={`/feed/${post.post.postId}/comments`}
            className={styles.comments}
          >
            {post.comments && (
              <span>Посмотреть все комментарии ({post.comments.length}) </span>
            )}
          </Link>
        )}
        <div className={styles.underPost}>
          {post && (
            <div className={styles.timeStamp}>{post.post.postTimeStamp}</div>
          )}
          <div className={styles.translate}>Показать первод</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
