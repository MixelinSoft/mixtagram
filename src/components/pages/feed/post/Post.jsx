// Import Icons
import { MdVerified } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
// Import LazyLoad Image Component
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// Import Components
import ActionButton from '../../../ui/ActionButton/ActionButton';
// Import CSS
import styles from './Post.module.css';
import { useState } from 'react';
import Comment from '../comments/comment/Comment';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const creator = {
    creatorImage: post.user.userPhoto,
    creatorName: post.user.userName,
    creatorVerificted: post.user.isVerificated,
  };

  const postImage = post.post.images[0];
  const likes = post.post.likes;
  const postDescription = post.post.description;
  const postComments = post.post.comments;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.creator}>
          <div className={styles.creatorImage}>
            <img src={creator.creatorImage} alt='' width='32px' height='32px' />
          </div>
          <div className={styles.creatorInfo}>
            <div className={styles.creatorName}>{creator.creatorName}</div>
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
        <LazyLoadImage
          src={postImage}
          alt='Post Image'
          effect='blur'
          width='100%'
        />
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
            <img src={likes.lastLiked} alt='' width='14px' height='14px' />
          </div>
          <div className={styles.numberOfLikes}>{likes.numberOfLikes}</div>
          <div className={styles.likeText}>Отметок "Нравится"</div>
        </div>

        <div className={styles.description}>
          <div className={styles.creatorInfo}>
            <span className={styles.creatorName}>{creator.creatorName}</span>
            <span className={styles.creatorVerificated}>
              <MdVerified />
            </span>
            <span className={styles.descriptionText}>{postDescription}</span>
          </div>
        </div>

        <Link to={`/feed/${post.post.id}/comments`} className={styles.comments}>
          {postComments && (
            <span>Посмотреть все комментарии ({postComments.length}) </span>
          )}
          {/* {postComments &&
            postComments.map((comment) => <Comment comment={comment} />)} */}
        </Link>
        <div className={styles.timeStamp}></div>
      </div>
    </div>
  );
};

export default Post;
