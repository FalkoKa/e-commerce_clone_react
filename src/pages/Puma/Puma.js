import poster from './../../images/puma_poster.png';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar.js/Navbar';
import CategoriesNav from '../../components/Categories_nav/Categories_nav';
import FooterOne from '../../components/Footer_one/Footer_one';
import FooterTwo from '../../components/Fotter_two/Footer_two';
import './Puma.css';
import { useState, useEffect } from 'react';
import Loading from './../../components/Loading';
import ProductCard from './../../components/ProductCard/ProductCard';
import axios from 'axios';
// import { useParams } from 'react-router-dom';

export default function Puma() {
  //   let brand = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`/api/v1/product/brand/puma`).then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <CategoriesNav />
      <div className="brand-wrapper">
        <div className="puma container-width-85">
          <div className="headings">
            <h1>PUMA</h1>
            <h1 style={{ fontWeight: 'normal' }}>Forever. Faster.</h1>
          </div>
          <img src={poster} alt="Puma" />
        </div>
      </div>
      <div className="product-grid container-width-85">
        {products.length === 0 ? (
          <Loading />
        ) : (
          products.map((product) => <ProductCard product={product} />)
        )}
      </div>

      <FooterOne />
      <FooterTwo />
    </>
  );
}
