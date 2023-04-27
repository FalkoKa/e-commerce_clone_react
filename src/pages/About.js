import Header from '../components/Header/Header';
import Navbar from '../components/Navbar.js/Navbar';
import CategoriesNav from '../components/Categories_nav/Categories_nav';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <Header />
      <Navbar />
      <CategoriesNav />
      <div className="about container-width-85">
        <div className="about-warning">
          <h1>IMPORTANT</h1>
          <p>
            This is not a real shop. You will not receive any of the ordered
            items. Any payment will be seens as a donation to the owner of this
            page.
          </p>

          <h2>THANK YOU</h2>
          <Link to={'/home'}>Back Home</Link>
        </div>
      </div>
    </>
  );
}
