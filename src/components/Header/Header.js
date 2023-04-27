import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="highest-header">
      <div className="container-width-85">
        <Link to={'/about'}>Help and contact</Link>
        <Link to={'/about'}>FREE DELIEVERY & RETURNS</Link>
        <Link to={'/about'}>100-day return policy</Link>
      </div>
    </header>
  );
}
