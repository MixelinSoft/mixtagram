import axios from 'axios';
import { directActions } from '../store/slices/directSlice';
import { loadingActions } from '../store/slices/loadingSlice';

const getDirect = () => {
  return async (dispatch) => {
    dispatch(loadingActions.setLoadingProgress(0));
    const url =
      'https://raw.githubusercontent.com/MixelinSoft/mixtagram/main/db/direct.json';
    try {
      const response = await axios.get(url);
      dispatch(directActions.setPrimary(response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    dispatch(loadingActions.setLoadingProgress(100));
  };
};

export default getDirect;
