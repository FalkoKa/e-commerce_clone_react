import Navbar from '../components/Navbar.js/Navbar';
import CategoriesNav from '../components/Categories_nav/Categories_nav';
import Slideshow from '../components/Slideshow/Slideshow';
import Header from '../components/Header/Header';

export default function Home(props) {
  return (
    <>
      <Header />
      <Navbar />
      <CategoriesNav />
      <div className="category">
        <Slideshow />
        <h3>Out top brands</h3>

        <h3>Out top categories</h3>
      </div>
    </>
  );
}
