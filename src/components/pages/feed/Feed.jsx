// Import Hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Import Components
import Post from './post/Post';
// Import Functions
import getFeed from '../../../services/getFeed';

const Feed = () => {
  // Create Dispatch Function
  const dispatchAction = useDispatch();
  // Get Posts From Store
  const posts = useSelector((state) => state.feed.posts);
  // Get Feed From Server
  useEffect(() => {
    if (posts.length === 0) {
      dispatchAction(getFeed());
    }
  }, [posts, dispatchAction, getFeed]);

  return (
    <>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => <Post key={post.post.postId} post={post} />)}
    </>
  );
};

export default Feed;
