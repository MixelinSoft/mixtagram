// Import Hooks
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Comment from '../comment/Comment';

// Import CSS
import styles from './Comments.module.css';
import AddComment from '../addComment/AddComment';
import VerificationImage from '../../../../ui/VerificationImage/VerificationImage';

const Comments = () => {
  // Create Navigate Function
  const navigate = useNavigate();
  // // Create PostState
  // const [post, setPost] = useState(null);

  // Get PostId from URL
  const { postId } = useParams();
  // Get User From Store
  const user = useSelector((state) => state.user);
  // Get the post from Redux Store
  const posts = useSelector((state) => state.feed.posts);
  // Find Post in Posts
  const post = posts.find((post) => post.post.postId === postId);
  console.log(post);
  // // If Post Not Exist - Redirect to Feed
  // useEffect(() => {
  //   if (posts) {
  //     setPost(posts.find((post) => post.post.id === postId).post);
  //   } else {
  //     navigate('/feed/');
  //   }
  // }, [posts, navigate, setPost]);

  return (
    <div className={styles.container}>
      {user.userName && (
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
            {user.isVerificated && <VerificationImage />}
            {post && (
              <span className={styles.description}>
                {post.post.postDescription}
              </span>
            )}
            <div className={styles.actions}>
              <div className={styles.timeStamp}>2 нед.</div>
              <div className={styles.translate}>Показать перевод</div>
            </div>
          </div>
        </div>
      )}

      <div className={styles.line}></div>

      {/* <div className={styles.comments}>
        {post && post.comments.map((comment) => <Comment comment={comment} />)}
      </div> */}
      {/* <AddComment userPhoto={user && user.userPhoto} /> */}
    </div>
  );
};

export default Comments;
