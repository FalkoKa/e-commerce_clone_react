import './Shopping_cart.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar.js/Navbar';
import CategoriesNav from '../../components/Categories_nav/Categories_nav';
import FooterOne from '../../components/Footer_one/Footer_one';
import FooterTwo from '../../components/Fotter_two/Footer_two';
import { Link } from 'react-router-dom';
import Item from '../../components/Item/Item';
import creditCardImg from './../../images/credit_card_white.png';

export default function ShoppingCart(props) {
  return (
    <div className="shopping-cart">
      <Header />
      <Navbar />
      <CategoriesNav />
      <div className="cart container-width-85">
        <div className="cart-items">
          <h3>Your bag (1 item)</h3>
          <Item />
          <Item />
          <Item />
          <Item />
        </div>

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

          <div className="checkout-link">
            <Link to={'/checkout'}>GO TO CHECKOUT</Link>
          </div>
        </div>

        <div className="accepted-payment">
          <h3>We accept</h3>
          <img src={creditCardImg} alt="payment" />
        </div>
      </div>
      <FooterOne />
      <FooterTwo />
    </div>
  );
}
