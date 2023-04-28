import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar.js/Navbar';
import CategoriesNav from '../components/Categories_nav/Categories_nav';
import FooterOne from '../components/Footer_one/Footer_one';
import FooterTwo from '../components/Fotter_two/Footer_two';

export default function Category(props) {
  let category = useParams();
  console.log(category);

  return (
    <>
      <Header />
      <Navbar />
      <CategoriesNav />
      <div className="category container-width-85">
        <h1>{category.category}</h1>
        {/* <Link to={'/home'}>
          <div className="order-confirmation-link">Back Home</div>
        </Link>{' '} */}
      </div>
      <FooterOne />
      <FooterTwo />
    </>
  );
}
