// Import Icons
import { MdVerified } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
// Import LazyLoad Image Component
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// Import Components
import ActionButton from '../../../ui/ActionButton/ActionButton';
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
import { useRef, useState } from 'react';
import Comment from '../comments/comment/Comment';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import VerificationImage from '../../../ui/VerificationImage/VerificationImage';
import PostNavigationButton from '../../../ui/PostNavigationButton/PostNavigationButton';

const Post = ({ post }) => {
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
              <svg
                fill='currentColor'
                height='24'
                viewBox='0 0 24 24'
                width='24'
              >
                <circle cx='12' cy='12' r='1.5'></circle>
                <circle cx='6' cy='12' r='1.5'></circle>
                <circle cx='18' cy='12' r='1.5'></circle>
              </svg>
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
      <div className={styles.info}>
        <div className={styles.actions}>
          <div className={styles.mainActions}>
            {/* Like Button */}
            <ActionButton className={styles.actionButton}>
              <svg
                aria-label='Нравится'
                fill='currentColor'
                height='24'
                role='img'
                viewBox='0 0 24 24'
                width='24'
              >
                <path d='M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z'></path>
              </svg>
            </ActionButton>
            {/* Comments Button */}
            <ActionButton className={styles.actionButton}>
              <svg viewBox='0 0 24 24' width='24'>
                <path
                  d='M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z'
                  fill='none'
                  stroke='currentColor'
                  strokeLinejoin='round'
                  strokeWidth='2'
                ></path>
              </svg>
            </ActionButton>
            {/* Send Button */}
            <ActionButton className={styles.actionButton}>
              <svg viewBox='0 0 24 24' width='24'>
                <title>Поделиться</title>
                <line
                  fill='none'
                  stroke='currentColor'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  x1='22'
                  x2='9.218'
                  y1='3'
                  y2='10.083'
                ></line>
                <polygon
                  fill='none'
                  points='11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334'
                  stroke='currentColor'
                  strokeLinejoin='round'
                  strokeWidth='2'
                ></polygon>
              </svg>
            </ActionButton>
          </div>
          <div className={styles.bookmark}>
            {/* Bookmark Button */}
            <ActionButton>
              <svg viewBox='0 0 24 24' width='24'>
                <polygon
                  fill='none'
                  points='20 21 12 13.44 4 21 4 3 20 3 20 21'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                ></polygon>
              </svg>
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
