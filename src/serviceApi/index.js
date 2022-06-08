import { get } from '../utils/http-api';

const getUsers = () => {
  return get('users');
};

export { getUsers };
