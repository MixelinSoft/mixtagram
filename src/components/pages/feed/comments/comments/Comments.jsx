// Import Hooks
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Comment from '../comment/Comment';

const Comments = (props) => {
  // Create Navigate Function
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  // Get PostId from URL
  const { postId } = useParams();
  // Get the post from Redux Store
  const posts = useSelector((state) => state.feed.posts);

  useEffect(() => {
    if (posts) {
      setPost(posts.find((post) => post.post.id === +postId).post);
    } else {
      navigate('/feed/');
    }
  }, [posts, navigate, setPost]);

  return (
    <div>
      {post && <div>{post.description}</div>}
      {post && post.comments.map((comment) => <Comment comment={comment} />)}
    </div>
  );
};

export default Comments;
