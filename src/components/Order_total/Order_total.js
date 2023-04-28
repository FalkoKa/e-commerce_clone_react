import { Link } from 'react-router-dom';

export default function OrderTotal(props) {
  return (
    <div className="order-total">
      <h3>Total</h3>
      <div className="flex">
        <span>Subtotal</span>
        <span>29.99 $</span>
      </div>
      <div className="flex">
        <span>Delivery</span>
        <span>0.00 $</span>
      </div>
      <div className="flex">
        <span>Total (VAT included</span>
        <span>29.99 $</span>
      </div>

      <Link to={'/checkout/confirm'}>
        <div className="checkout-link">GO TO CHECKOUT</div>
      </Link>
    </div>
  );
}
