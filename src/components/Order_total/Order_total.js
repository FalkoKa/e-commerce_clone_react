import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../userConext';

export default function OrderTotal(props) {
  let { cart, setOrder, order } = useContext(userContext);

  const subtotal = () => {
    return cart
      .map((i) => {
        return { price: i.item.price, quantity: i.quantity };
      })
      .reduce((total, i) => {
        return (total += i.price * i.quantity);
      }, 0);
  };

  const deliveryFee = subtotal() > 49.0 ? 0 : 4.99;

  subtotal();

  return (
    <div className="order-total">
      <h3>Total</h3>
      <div className="flex">
        <span>Subtotal</span>
        <span>{subtotal().toFixed(2)} USD</span>
      </div>
      <div className="flex">
        <span>Delivery</span>
        <span>{deliveryFee.toFixed(2)} USD</span>
      </div>
      <div className="flex">
        <span>Total (VAT included)</span>
        <span>{(subtotal() + deliveryFee).toFixed(2)} USD</span>
      </div>

      <Link
        onClick={() =>
          setOrder({ ...order, subTotal: subtotal(), deliveryFee: deliveryFee })
        }
        to={'/checkout'}
      >
        <div className="checkout-link">GO TO CHECKOUT</div>
      </Link>
    </div>
  );
}
