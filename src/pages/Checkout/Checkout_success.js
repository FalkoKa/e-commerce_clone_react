import { Link } from 'react-router-dom';

export default function CheckoutSuccess(props) {
  return (
    <div className="checkout-success">
      <h1>Thanks for your order!</h1>
      <Link to={'/home'}>
        <div className="order-confirmation-link">Continue Shopping</div>
      </Link>
    </div>
  );
}
