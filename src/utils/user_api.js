import axios from 'axios';

export function userLogin(data) {
  return axios.post('/api/v1/user', data).then((res) => res.data);
}
