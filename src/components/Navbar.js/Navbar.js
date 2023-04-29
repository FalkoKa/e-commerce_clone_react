import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Navbar.css';
import { CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci';
import { userContext } from '../../userConext';
import { useContext } from 'react';

export default function Navbar(props) {
  return (
    <div className="nav container-width-85">
      <Logo />
      <nav>
        <Link to={'/myaccount'}>
          <CiUser size={25} />
        </Link>
        <Link to={''}>
          <CiHeart size={25} />
        </Link>
        <Link to={'/cart'}>
          <CiShoppingCart size={25} />
        </Link>
      </nav>
    </div>
  );
}
