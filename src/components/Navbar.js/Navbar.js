import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Navbar.css';
import { CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci';
import { userContext } from '../../userConext';
import { useContext, useState } from 'react';
import Badge from '@mui/material/Badge';

export default function Navbar(props) {
  const { cart, user, logout } = useContext(userContext);
  // const [count, setCount] = useState(cart.length);

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
    </div>
  );
}
