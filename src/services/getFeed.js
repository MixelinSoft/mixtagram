import axios from 'axios';
import { feedActions } from '../store/slices/feedSlice';
import { loadingActions } from '../store/slices/loadingSlice';

const getFeed = () => {
  return async (dispatch) => {
    dispatch(loadingActions.setLoadingProgress(0));
    const url =
      'https://raw.githubusercontent.com/MixelinSoft/mixtagram/main/db/feed.json';
    try {
      const response = await axios.get(url);
      dispatch(feedActions.setPosts(response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    dispatch(loadingActions.setLoadingProgress(0));
  };
};

export default getFeed;
