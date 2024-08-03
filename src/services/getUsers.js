import axios from 'axios';
import { usersActions } from '../store/slices/usersSlice';

const getUsers = () => {
  return async (dispatch) => {
    const url =
      'https://raw.githubusercontent.com/MixelinSoft/mixtagram/main/db/users.json';
    try {
      const response = await axios.get(url);
      console.log(response.data);
      dispatch(usersActions.setUsers(response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};

export default getUsers;
