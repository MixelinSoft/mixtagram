import axios from 'axios';
import { userActions } from '../store/slices/userSlice';

const getUser = () => {
  return async (dispatch) => {
    const url =
      'https://raw.githubusercontent.com/MixelinSoft/mixtagram/main/db/user.json';
    try {
      const response = await axios.get(url);
      console.log(response.data);
      dispatch(userActions.setUser(response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};

export default getUser;
