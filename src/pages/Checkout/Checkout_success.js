import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import { userContext } from '../../userConext';

export default function CheckoutSuccess() {
  let { user } = useContext(userContext);
  const [orderID, setOrderID] = useState('');

  console.log(user);

  useEffect(() => {
    axios.get(`/api/v1/order/${user._id}`).then((res) => {
      console.log(res.data);
      setOrderID(res.data._id);
    });
  }, []);

  return (
    <div className="checkout-success">
      <h1>Thanks for your order!</h1>
      <p>Your order ID #{orderID}</p>
      <Link to={'/home'}>
        <div className="order-confirmation-link">Continue Shopping</div>
      </Link>
    </div>
  );
}
