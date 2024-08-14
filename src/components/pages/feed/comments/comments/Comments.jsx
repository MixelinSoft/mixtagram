// Import Hooks
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comment from '../comment/Comment';
// Impoer Components
import AddComment from '../addComment/AddComment';
import VerificationImage from '../../../../ui/VerificationImage/VerificationImage';
// Import CSS
import styles from './Comments.module.css';

const Comments = () => {
  // Get PostId from URL
  const { postId } = useParams();
  // Get User From Store
  const creator = useSelector((state) => state.user);
  // Get the post from Redux Store
  const posts = useSelector((state) => state.feed.posts);
  // Find Post in Posts
  const post = posts.find((post) => post.post.postId === postId);

  return (
    <div className={styles.container}>
      {creator && (
        <div className={styles.creator}>
          <div className={styles.creatorPhoto}>
            <img
              src={creator.userPhoto}
              alt='userPhoto'
              width='32px'
              height='32px'
            />
          </div>
          <div className={styles.creatorInfo}>
            <span className={styles.userName}>{creator.userName}</span>
            {creator.isVerificated && (
              <span className={styles.verificationImage}>
                <VerificationImage />
              </span>
            )}
            {post && (
              <span className={styles.description}>
                {post.post.postDescription}
              </span>
            )}
            <div className={styles.actions}>
              {post && (
                <div className={styles.timeStamp}>
                  {post.post.postTimeStamp}
                </div>
              )}
              <div className={styles.translate}>Показать перевод</div>
            </div>
          </div>
        </div>
      )}

      <div className={styles.line}></div>

      <div className={styles.comments}>
        {post &&
          post.comments.map((comment) => (
            <Comment key={comment.commentId} comment={comment} />
          ))}
      </div>
      <AddComment userPhoto={creator && creator.userPhoto} />
    </div>
  );
};

export default Comments;
