import axios from 'axios';
import { directActions } from '../store/slices/directSlice';

const getDirect = () => {
  return async (dispatch) => {
    const url =
      'https://raw.githubusercontent.com/MixelinSoft/mixtagram/main/db/direct.json';
    try {
      const response = await axios.get(url);
      dispatch(directActions.setPrimary(response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};

export default getDirect;
