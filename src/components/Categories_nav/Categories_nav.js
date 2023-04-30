import { Link } from 'react-router-dom';
import './Categories_nav.css';
import Search from '../Search';

export default function CategoriesNav({ onSearch }) {
  return (
    <div className="cat-nav container-width-85">
      <nav>
        <Link>NEW IN</Link>
        <Link to={'/Clothing'}>Clothing</Link>
        <Link to={'/Shoes'}>Shoes</Link>
        <Link to={'/Sports'}>Sports</Link>
        <Link to={'/Brands'}>Brands</Link>
        <Link to={'/Accessories'}>Accessories</Link>
        <Link to={'/Sale'}>Sale %</Link>
      </nav>
      <Search />
    </div>
  );
}
