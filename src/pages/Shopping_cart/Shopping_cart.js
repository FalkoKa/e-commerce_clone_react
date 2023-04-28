import './Shopping_cart.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar.js/Navbar';
import CategoriesNav from '../../components/Categories_nav/Categories_nav';
import FooterOne from '../../components/Footer_one/Footer_one';
import FooterTwo from '../../components/Fotter_two/Footer_two';
import Item from '../../components/Item/Item';
import creditCardImg from './../../images/credit_card_white.png';
import OrderTotal from '../../components/Order_total/Order_total';

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

        <OrderTotal />

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
