import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import DropdownMenu from '../DropdownMenu';
import './Navbar.css';
import { CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci';
import { userContext } from '../../userConext';
import { useContext } from 'react';
import Badge from '@mui/material/Badge';

export default function Navbar(props) {
  const { cart, user, logout } = useContext(userContext);

  return (
    <div className="nav container-width-85">
      <Logo />
      <nav>
        {user && <button onClick={() => logout()}>Logout</button>}
        <Link className="navlink" to={'/myaccount'}>
          <CiUser size={25} />
        </Link>
        <Link className="navlink" to={''}>
          <CiHeart size={25} />
        </Link>
        <div className="drop navlink">
          <Link className="cart-icon" to={'/cart'}>
            <Badge color="secondary" badgeContent={cart.length}>
              <CiShoppingCart size={25} />
            </Badge>
          </Link>
          <DropdownMenu />
        </div>
      </nav>
    </div>
  );
}
