import { useEffect } from 'react';
import getPosts from '../../../services/getPosts';
import Post from './post/Post';
import { useDispatch, useSelector } from 'react-redux';

const Feed = (props) => {
  // Create Dispatch Function
  const dispatchAction = useDispatch();
  // Get Posts From Store
  const posts = useSelector((state) => state.feed.posts);

  console.log(posts);
  // Get Posts
  useEffect(() => {
    dispatchAction(getPosts());
  }, []);

  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
