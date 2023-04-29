import axios from 'axios';

export function login(data) {
  return axios.post('/api/v1/login', data).then((res) => res.data);
}
