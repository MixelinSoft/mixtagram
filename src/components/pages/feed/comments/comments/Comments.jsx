// Import Hooks
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Comment from '../comment/Comment';

// Import CSS
import styles from './Comments.module.css';
import AddComment from '../addComment/AddComment';

const Comments = (props) => {
  // Create Navigate Function
  const navigate = useNavigate();
  // Create PostState
  const [post, setPost] = useState(null);
  // Get PostId from URL
  const { postId } = useParams();
  // Get User From Store
  const user = useSelector(
    (state) => state.feed.posts && state.feed.posts[0].user,
  );
  // Get the post from Redux Store
  const posts = useSelector((state) => state.feed.posts);
  // If Post Not Exist - Redirect to Feed
  useEffect(() => {
    if (posts) {
      setPost(posts.find((post) => post.post.id === +postId).post);
    } else {
      navigate('/feed/');
    }
  }, [posts, navigate, setPost]);

  return (
    <div className={styles.container}>
      {user && (
        <div className={styles.creator}>
          <div className={styles.creatorPhoto}>
            <img
              src={user.userPhoto}
              alt='userPhoto'
              width='32px'
              height='32px'
            />
          </div>
          <div className={styles.creatorInfo}>
            <span className={styles.userName}>{user.userName}</span>
            {post && (
              <span className={styles.description}>{post.description}</span>
            )}
            <div className={styles.actions}>
              <div className={styles.timeStamp}>2 нед.</div>
              <div className={styles.translate}>Показать перевод</div>
            </div>
          </div>
        </div>
      )}

      <div className={styles.line}></div>

      <div className={styles.comments}>
        {post && post.comments.map((comment) => <Comment comment={comment} />)}
      </div>
      <AddComment userPhoto={user && user.userPhoto} />
    </div>
  );
};

export default Comments;
