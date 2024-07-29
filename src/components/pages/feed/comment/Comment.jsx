import styles from './Comment.module.css';

const Comment = ({ comment }) => {
  console.log(comment);
  const user = comment.user;
  const text = comment.comment;
  return (
    <div className={styles.container}>
      <div className={styles.userPhoto}>
        <img src={user.userPhoto} alt='userPhoto' width='32px' height='32px' />
      </div>
      <span className={styles.userName}>{user.userName}</span>
      <span>{text}</span>
    </div>
  );
};

export default Comment;
