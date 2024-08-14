import { useSelector } from 'react-redux';
import styles from './Comment.module.css';
import VerificationImage from '../../../../ui/VerificationImage/VerificationImage';
import Icon from '../../../../ui/Icon/Icon';

const Comment = ({ comment }) => {
  // Get Users From Store
  const users = useSelector((state) => state.users.users);
  // Find User in Users
  const user = users.find((user) => {
    if (user.userId === comment.userId) {
      return user;
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.userPhoto}>
        <img src={user.userPhoto} alt='userPhoto' width='32px' height='32px' />
      </div>
      <div className={styles.commentInfo}>
        <div>
          <div className={styles.text}>
            <div className={styles.textComment}>
              <span className={styles.userName}>{user.userName}</span>
              {user.isVerificated && (
                <span className={styles.verificationImage}>
                  <VerificationImage />
                </span>
              )}
              <span>{comment.commentText}</span>
            </div>
            <div className={styles.likeButton}>
              <Icon icon='heart' />
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.timeStamp}>{comment.commentTimeStamp}</div>
            <div className={styles.likes}>
              Отметки "Нравится": {comment.likes.numberOfLikes}
            </div>
            <div className={styles.answer}>Ответить</div>
            <div className={styles.translate}>Показать перевод</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
