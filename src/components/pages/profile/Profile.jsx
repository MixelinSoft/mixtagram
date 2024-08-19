import { useSelector } from 'react-redux';
import styles from './Profile.module.css';

const Profile = (props) => {
  const user = useSelector((state) => state.user);

  const posts = useSelector((state) => state.feed.posts);

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
      <div className={styles.viewSettings}>viewSettings</div>
      <div className={styles.postsGrid}>
        {posts &&
          posts.map((post) => (
            <div className={styles.postGrid}>
              <img
                className={styles.postImageGrid}
                src={post.post.postImages[0]}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
