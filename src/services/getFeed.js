import axios from 'axios';
import { feedActions } from '../store/slices/feedSlice';

const getFeed = () => {
  return async (dispatch) => {
    const url =
      'https://raw.githubusercontent.com/MixelinSoft/mixtagram/main/db/feed.json';
    try {
      const response = await axios.get(url);
      dispatch(feedActions.setPosts(response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};

export default getFeed;
