import { Link } from 'react-router-dom';
import logo from './../../images/logo.png';
import './Navbar.css';
import { CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci';

export default function Navbar(props) {
  return (
    <div className="nav container-width-85">
      <div className="logo">
        <img
          style={{ height: '50px', display: 'inline' }}
          src={logo}
          alt="logo"
        />
        <h3 style={{ display: 'inline' }}>eC_Clone</h3>
      </div>
      <nav>
        <Link to={'login'}>
          <CiUser size={25} />
        </Link>
        <Link to={''}>
          <CiHeart size={25} />
        </Link>
        <Link to={'cart'}>
          <CiShoppingCart size={25} />
        </Link>
      </nav>
    </div>
  );
}
