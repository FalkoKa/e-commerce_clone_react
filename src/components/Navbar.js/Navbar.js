import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Navbar.css';
import { CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci';

export default function Navbar(props) {
  return (
    <div className="nav container-width-85">
      <Logo />
      <nav>
        <Link to={'/login'}>
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
