import './Shopping_cart.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar.js/Navbar';
import CategoriesNav from '../../components/Categories_nav/Categories_nav';
import FooterOne from '../../components/Footer_one/Footer_one';
import FooterTwo from '../../components/Fotter_two/Footer_two';
import Item from '../../components/Item/Item';
import creditCardImg from './../../images/credit_card_white.png';
import OrderTotal from '../../components/Order_total/Order_total';
import { useContext, useEffect } from 'react';
import { userContext } from '../../userConext';
import axios from 'axios';

export default function ShoppingCart(props) {
  const { user, cart, setCart } = useContext(userContext);

  useEffect(() => {
    if (user) {
      axios.get(`api/v1/cart/${user._id}`).then((res) => {
        console.log(res.data.items);
        setCart(res.data.items);
      });
    } else {
      setCart(JSON.parse(localStorage.getItem('cartLocal') || '[]'));
    }
  }, [user]);

  return (
    <div className="shopping-cart">
      <Header />
      <Navbar />
      <CategoriesNav />
      <div className="cart container-width-85">
        <div className="cart-items">
          <h3>
            Your bag ({cart.length === 1 ? '1 item' : `${cart.length} items`})
          </h3>
          {cart.map((item) => (
            <Item key={item._id} item={item.item} />
          ))}
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
