import Navbar from '../components/Navbar.js/Navbar';
import CategoriesNav from '../components/Categories_nav/Categories_nav';
import Slideshow from '../components/Slideshow/Slideshow';
import Header from '../components/Header/Header';
import FooterOne from '../components/Footer_one/Footer_one';
import FooterTwo from '../components/Fotter_two/Footer_two';
import ProductCard from '../components/ProductCard/ProductCard';
import Brands from '../components/Brands/Brands';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/product').then((res) => {
      console.log(res.data.products);
      setProducts(res.data.products);
    });
  }, []);

  const slides = [
    {
      url: 'https://img01.ztat.net/article/spp-media-p1/b8270a19bed1473a8592f8547bc694b8/932257e5293a47cfb7dce132f204390c.jpg?imwidth=1800&filter=packshot',
      title: 'AIR MAX 90 - Trainers',
      text: 'WOw, nice shoes',
    },
    {
      url: 'https://img01.ztat.net/article/spp-media-p1/db9331558ae94f83a3d27f1b1e657e02/73247a5d5b384b00986cda9d3466809e.jpg?imwidth=762',
      title: 'NIKE DUNK LOW NDDC - Trainers',
      text: 'WOw, I love NIKE!',
    },
    {
      url: 'https://img01.ztat.net/article/spp-media-p1/2188990921544ba5a5e2781389fce8e1/c56fbedda22f4e068b13128b02f5a50e.jpg?imwidth=1800',
      title: 'SIGNATURE TEE - Basic T-shirt',
      text: 'WOw, What a great shirt',
    },
    {
      url: 'https://img01.ztat.net/article/spp-media-p1/4a87b7fe388e4bfa95da015cb816d869/698820b89b104de5973c24e50e250457.jpg?imwidth=1800&filter=packshot',
      title: 'PANDA BÄR AUFDRUCK TIERMOTIV MIT SONNE - Print T-shirt',
      text: 'WOw, What a great shirt',
    },
    {
      url: 'https://img01.ztat.net/article/spp-media-p1/a71aebc276324ea99d6f18ecd6922e69/1bf776c1cdcf49d0a4e171905b050aed.jpg?imwidth=1800&filter=packshot',
      title: `AIR FORCE 1 '07 - Trainers`,
      text: `That's why Nike Members who link their accounts on Zalando get first and exclusive access to hot drops, with new products added every two weeks.`,
    },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <CategoriesNav />
      <Slideshow slides={slides} />

      <div className="category container-width-85">
        <h3>Our most popular brands</h3>
        <Brands />
        <h3>Products</h3>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
      <FooterOne />
      <FooterTwo />
    </>
  );
}
