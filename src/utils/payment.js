import axios from 'axios';

export default function sendPaymentRequest(cart) {
  return axios
    .post(
      'http://e-commercecloneapi-production.up.railway.app/create-checkout-session',
      {
        items: cart,
      }
    )
    .then((res) => {
      console.log(res);
      console.log('success');

      if (res.status === 200) {
        console.log(res.data.url);
        return (window.location = res.data.url);
      }
      return Promise.reject(res.data);
    });
}
