import axios from 'axios';

export function userLogin(data) {
  return axios
    .post(
      'http://e-commercecloneapi-production.up.railway.app/api/v1/user',
      data
    )
    .then((res) => res.data);
}
