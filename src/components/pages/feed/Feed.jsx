// Import Hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Import Components
import Post from './post/Post';
// Import Functions
import getFeed from '../../../services/getFeed';
import { localStorageManager } from '../../../utils/localStorageManager';
import { feedActions } from '../../../store/slices/feedSlice';

const Feed = () => {
  // Create Dispatch Function
  const dispatchAction = useDispatch();
  // Get Posts From Store
  const posts = useSelector((state) => state.feed.posts);
  // Get Feed From Server or Local Storage
  useEffect(() => {
    const localFeed = localStorageManager('get', 'feed');
    if (posts.length === 0 && !localFeed) {
      dispatchAction(getFeed());
    } else {
      dispatchAction(feedActions.setPosts(localFeed));
    }
  }, []);
  // Set Feed To Local Storage
  useEffect(() => {
    const localFeed = localStorageManager('get', 'feed');
    if (!localFeed && posts.length !== 0) {
      localStorageManager('set', 'feed', posts);
    }
  }, [posts]);

  return (
    <>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => <Post key={post.post.postId} post={post} />)}
    </>
  );
};

export default Feed;
