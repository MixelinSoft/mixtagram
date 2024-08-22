import { useSelector } from 'react-redux';
import styles from './Profile.module.css';
import { useState } from 'react';
import ActionButton from '../../ui/ActionButton/ActionButton';
import Icon from '../../ui/Icon/Icon';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Post from '../feed/post/Post';

const Profile = (props) => {
  // Get User From Store
  const user = useSelector((state) => state.user);
  // Get Posts From Store
  const posts = useSelector((state) => state.feed.posts);
  // Create View Method State
  const [viewMethod, setViewMethod] = useState('grid');

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className={styles.userInfo}>
          <div className={styles.userPhoto}>
            <img
              src={user.userPhoto}
              alt='Profile Photo'
              width='77px'
              height='77px'
            />
          </div>
          <div className={styles.info}>
            <div className={styles.userName}>{user.userName}</div>
            <div className={styles.buttons}>1 2 3</div>
            <div className={styles.statistic}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
              quas facere fugit nobis magni quos culpa delectus id soluta quis
              veniam eligendi amet architecto cum placeat inventore dicta
              repellendus neque.
            </div>
          </div>
        </div>
        <div className={styles.profileDescription}></div>
      </div>
      <div className={styles.socialInfo}>socialInfo</div>
      <div className={styles.viewSettings}>
        <ActionButton
          onClick={() => {
            setViewMethod('grid');
          }}
          className={`${styles.viewSettingsButton} ${
            viewMethod === 'grid' && styles.activeViewSettingsButton
          }`}
        >
          <Icon icon='grid' />
        </ActionButton>
        <ActionButton
          onClick={() => {
            setViewMethod('feed');
          }}
          className={`${styles.viewSettingsButton} ${
            viewMethod === 'feed' && styles.activeViewSettingsButton
          }`}
        >
          <Icon icon='feed' />
        </ActionButton>
        <ActionButton
          onClick={() => {
            setViewMethod('bookmarks');
          }}
          className={`${styles.viewSettingsButton} ${
            viewMethod === 'bookmarks' && styles.activeViewSettingsButton
          }`}
        >
          <Icon icon='bookmark' />
        </ActionButton>
        <ActionButton
          onClick={() => {
            setViewMethod('marks');
          }}
          className={`${styles.viewSettingsButton} ${
            viewMethod === 'marks' && styles.activeViewSettingsButton
          }`}
        >
          <Icon icon='mark' />
        </ActionButton>
      </div>

      {/* View Grid */}
      {posts && viewMethod === 'grid' && (
        <div className={styles.postsGrid}>
          {posts.map((post) => {
            return (
              <div className={styles.postGrid} key={post.post.postId}>
                <LazyLoadImage
                  src={post.post.postImages[0]}
                  alt='Post Image'
                  className={styles.postImageGrid}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* View Feed */}
      {posts && viewMethod === 'feed' && (
        <div className={styles.postsFeed}>
          {posts.map((post) => (
            <Post post={post} inProfile />
          ))}
        </div>
      )}

      {/* View Bookmarks */}
      {viewMethod === 'bookmarks' && <div>Bookmarks</div>}

      {/* View Marks */}
      {viewMethod === 'marks' && <div>Marks</div>}
    </div>
  );
};

export default Profile;
