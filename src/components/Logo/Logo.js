import { Link } from 'react-router-dom';
import logo from './../../images/logo.png';

export default function Logo() {
  return (
    <Link to={'/home'}>
      <div className="logo">
        <img
          style={{
            height: '50px',
            display: 'inline',
            transform: 'rotate(90deg)',
          }}
          src={logo}
          alt="logo"
        />
        <h3 style={{ display: 'inline' }}>eC_Clone</h3>
      </div>
    </Link>
  );
}
