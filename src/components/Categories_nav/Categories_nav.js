import { Link } from 'react-router-dom';
import './Categories_nav.css';

export default function CategoriesNav(props) {
  return (
    <div className="cat-nav container-width-85">
      <nav>
        <Link>NEW IN</Link>
        <Link>Clothing</Link>
        <Link>Shoes</Link>
        <Link>Sports</Link>
        <Link>Streetwear</Link>
        <Link>Accessories</Link>
        <Link>Sale %</Link>
      </nav>
      <div className="search-input">
        <input type="search" placeholder="Search" />
      </div>
    </div>
  );
}
