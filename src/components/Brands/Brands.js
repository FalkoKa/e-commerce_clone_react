import './Brands.css';
import Puma from './../../images/puma.png';
import Mango from './../../images/mango.png';
import Berksha from './../../images/berksha.png';
import Nike from './../../images/nike.png';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div className="brand-container">
      <Link to={'/puma'}>
        <div className="brand">
          <img src={Puma} alt="Puma-Logo" />
        </div>
      </Link>
      <Link to={'/nike'}>
        <div className="brand">
          <img src={Nike} alt="Nike-Logo" />
        </div>
      </Link>
      <Link to={'/mango'}>
        <div className="brand">
          <img src={Mango} alt="Mango-Logo" />
        </div>
      </Link>
      <Link to={'/berksha'}>
        <div className="brand">
          <img src={Berksha} alt="Berksha-Logo" />
        </div>
      </Link>
    </div>
  );
}
