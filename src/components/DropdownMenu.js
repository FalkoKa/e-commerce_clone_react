import DropdownItem from './DropdownItem';
import { userContext } from '../userConext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function DropdownMenu() {
  const { cart } = useContext(userContext);

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
    <div className="dropdown-menu">
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', width: '250px', margin: '0 auto' }}>
          <h3>YOUR CART IS EMPTY</h3>
          <p>Go. Go fill it up with all your fashion hopes and dreams.</p>
        </div>
      ) : (
        <>
          <h3>Your Cart</h3>
          <div className="dropdown-cart">
            {cart.map((item) => (
              <DropdownItem
                item={item.item}
                quantity={item.quantity}
                key={item._id}
              />
            ))}
          </div>
          <div className="dropdown-summary">
            <div className="order-total">
              <div className="flex">
                <span>Delivery</span>
                <span>{deliveryFee.toFixed(2)} USD</span>
              </div>
              <div className="flex">
                <span>Total</span>
                <span>{(subtotal() + deliveryFee).toFixed(2)} USD</span>
              </div>
              <div className="cart-link">
                <Link to={'/cart'}>Go to cart</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
