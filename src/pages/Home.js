import Navbar from '../components/Navbar.js/Navbar';
import CategoriesNav from '../components/Categories_nav/Categories_nav';
import Slideshow from '../components/Slideshow/Slideshow';
import Header from '../components/Header/Header';
import FooterOne from '../components/Footer_one/Footer_one';

export default function Home(props) {
  const slides = [
    {
      url: 'https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-1.jpg',
      title: 'Test',
    },
    {
      url: 'https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-2.jpg',
      title: 'Test',
    },
    {
      url: 'https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-3.jpg',
      title: 'Test',
    },
    {
      url: 'https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-4.jpg',
      title: 'Test',
    },
    {
      url: 'https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-5.jpg',
      title: 'Test',
    },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <CategoriesNav />
      <Slideshow slides={slides} />

      <div className="category container-width-85">
        <h3>Out top brands</h3>
        <h3>Out top categories</h3>
      </div>
      <FooterOne />
    </>
  );
}
