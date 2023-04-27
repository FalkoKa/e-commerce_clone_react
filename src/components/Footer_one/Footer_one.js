import './Footer_one.css';
import creditCargImg from './../../images/credit_card.png';
import deliveryOptionsImg from './../../images/delivery_options.png';
import { Link } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddCardIcon from '@mui/icons-material/AddCard';

export default function FooterOne() {
  return (
    <div className="footer-one">
      <footer className="container-width-85">
        <div className="footer-heading">
          <h3>
            <HelpOutlineIcon /> <span>About us</span>
          </h3>
          <ul>
            <li>
              <Link to={'/about'}>Careers</Link>
            </li>
            <li>
              <Link to={'/about'}>Newsroom</Link>
            </li>
            <li>
              <Link to={'/about'}>Investor Relations</Link>
            </li>
          </ul>
        </div>
        <div className="footer-heading">
          <h3>
            <CreditCardIcon /> <span>Our payment methods</span>
          </h3>
          <img src={creditCargImg} alt="payment" />
        </div>
        <div className="footer-heading">
          <h3>
            <LocalShippingIcon /> <span>Our partners</span>
          </h3>
          <img src={deliveryOptionsImg} alt="partners" />
        </div>
        <div className="footer-heading">
          <h3>
            <WorkOutlineIcon /> <span>Our promises</span>
          </h3>
          <ul className="promises">
            <li>
              <Link to={'/about'}>
                <LocalShippingIcon /> <span>Free Delivery</span>
              </Link>
            </li>
            <li>
              <Link to={'/about'}>
                <CalendarMonthIcon /> <span>100-day return policy</span>
              </Link>
            </li>
            <li>
              <Link to={'/about'}>
                <AddCardIcon /> <span>Flexible payment options</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
