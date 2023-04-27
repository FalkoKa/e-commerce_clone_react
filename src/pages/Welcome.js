import { Link } from 'react-router-dom';
import logo from './../images/logo.png';

export default function Welcome() {
  return (
    <div className="welcome">
      <Link to={'home'}>
        <img src={logo} alt="logo" />
        <h1>Welcome to eC_Clone</h1>
      </Link>
    </div>
  );
}
