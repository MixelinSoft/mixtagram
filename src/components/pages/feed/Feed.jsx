import { useEffect } from 'react';
import getPosts from '../../../services/getPosts';
import Post from './post/Post';
import { useDispatch, useSelector } from 'react-redux';

const Feed = (props) => {
  // Create Dispatch Function
  const dispatchAction = useDispatch();
  // Get Posts From Store
  const posts = useSelector((state) => state.feed.posts);
  // Get Posts From Server
  useEffect(() => {
    dispatchAction(getPosts());
  }, [dispatchAction]);

  return <div>{posts && posts.map((post) => <Post post={post} />)}</div>;
};

export default Feed;
