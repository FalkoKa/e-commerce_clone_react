import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Navbar.css';
import { CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci';
import { userContext } from '../../userConext';
import { useContext, useState } from 'react';
import Badge from '@mui/material/Badge';

export default function Navbar(props) {
  const { cart, user, logout } = useContext(userContext);

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
    <div className="nav container-width-85">
      <Logo />
      <nav>
        {user && <button onClick={() => logout()}>Logout</button>}
        <Link to={'/myaccount'}>
          <CiUser size={25} />
        </Link>
        <Link to={''}>
          <CiHeart size={25} />
        </Link>
        <Link to={'/cart'}>
          <Badge color="secondary" badgeContent={cart.length}>
            <CiShoppingCart size={25} />
          </Badge>
        </Link>
      </nav>
      <div className="dropdown-menu">
        <h3>Your Cart</h3>
        <div className="dropdwown-cart"></div>
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
      </div>
    </div>
  );
}
