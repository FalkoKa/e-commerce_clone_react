import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="container-width-85">
        <Link>Help and contact</Link>
        <Link>FREE DELIEVERY & RETURNS</Link>
        <Link>100-day return policy</Link>
      </div>
    </header>
  );
}
