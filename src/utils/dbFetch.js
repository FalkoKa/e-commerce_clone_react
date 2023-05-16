import axios from 'axios';

const fetchCart = (id) => {
  return axios.get(
    `https://e-commercecloneapi-production.up.railway.app/api/v1/cart/${id}`
  );
};

export { fetchCart };
