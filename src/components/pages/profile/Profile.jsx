import styles from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>userBlock</div>
      <div className={styles.socialInfo}>sicialInfoBlock</div>
      <div className={styles.viewSettings}>viewSettings</div>
      <div className={styles.posts}>posts</div>
    </div>
  );
};

export default Profile;
