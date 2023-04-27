import { Link } from 'react-router-dom';
import './Categories_nav.css';
import Search from '../Search';

export default function CategoriesNav(props) {
  return (
    <div className="cat-nav container-width-85">
      <nav>
        <Link>NEW IN</Link>
        <Link>Clothing</Link>
        <Link>Shoes</Link>
        <Link>Sports</Link>
        <Link>Brands</Link>
        <Link>Accessories</Link>
        <Link>Sale %</Link>
      </nav>
      <Search />
    </div>
  );
}
