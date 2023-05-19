import Navbar from '../components/Navbar.js/Navbar';
import CategoriesNav from '../components/Categories_nav/Categories_nav';
import Slideshow from '../components/Slideshow/Slideshow';
import Header from '../components/Header/Header';
import FooterOne from '../components/Footer_one/Footer_one';
import FooterTwo from '../components/Fotter_two/Footer_two';
import ProductCard from '../components/ProductCard/ProductCard';
import Brands from '../components/Brands/Brands';
import axios from 'axios';
import Loading from '../components/Loading';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState, useContext } from 'react';
import { userContext } from '../userConext';
import { fetchCart } from '../utils/dbFetch';

export default function Home(props) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  let { user, setCart, setCartID } = useContext(userContext);

  // const [isSearching, setIsSearching] = useState(false);

  // const handleSearching = (bool) => {
  //   setIsSearching(bool);
  // };

  useEffect(() => {
    axios
      .get(
        'https://e-commercecloneapi-production.up.railway.app/api/v1/product'
      )
      .then((res) => {
        setProducts(res.data.products);
      });
  }, []);

  useEffect(() => {
    if (user) {
      fetchCart(user._id)
        .then((res) => {
          setCart(res.data.items);
          setCartID(res.data._id);
        })
        .catch((err) => console.log(err));
    } else {
      return;
    }
  }, []);

  const slides = [
    {
      url: 'https://img01.ztat.net/article/spp-media-p1/b8270a19bed1473a8592f8547bc694b8/932257e5293a47cfb7dce132f204390c.jpg?imwidth=1800&filter=packshot',
      title: 'AIR MAX 90 - Trainers',
    },
    {
      url: 'https://img01.ztat.net/article/spp-media-p1/db9331558ae94f83a3d27f1b1e657e02/73247a5d5b384b00986cda9d3466809e.jpg?imwidth=762',
      title: 'NIKE DUNK LOW NDDC - Trainers',
    },
    {
      url: 'https://img01.ztat.net/article/spp-media-p1/2188990921544ba5a5e2781389fce8e1/c56fbedda22f4e068b13128b02f5a50e.jpg?imwidth=1800',
      title: 'SIGNATURE TEE - Basic T-shirt',
    },
    {
      url: 'https://img01.ztat.net/article/spp-media-p1/4a87b7fe388e4bfa95da015cb816d869/698820b89b104de5973c24e50e250457.jpg?imwidth=1800&filter=packshot',
      title: 'PANDA BÄR AUFDRUCK TIERMOTIV MIT SONNE - Print T-shirt',
    },
    {
      url: 'https://img01.ztat.net/article/spp-media-p1/a71aebc276324ea99d6f18ecd6922e69/1bf776c1cdcf49d0a4e171905b050aed.jpg?imwidth=1800&filter=packshot',
      title: `AIR FORCE 1 '07 - Trainers`,
    },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <CategoriesNav />
      <Slideshow slides={slides} />

      <div className="category container-width-85">
        <>
          <h3>Our most popular brands</h3>
          <Brands />
        </>
        <h3>Products</h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '15px 0',
          }}
        >
          <div className="product-grid">
            {products.length === 0 ? (
              <Loading />
            ) : (
              products
                .slice((page - 1) * 8, (page - 1) * 8 + 8)
                .map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
            )}
          </div>
          <Stack spacing={2}>
            <Pagination
              onChange={(event, value) => {
                setPage(value);
              }}
              count={Math.ceil(products.length / 8)}
            />
          </Stack>
        </div>
      </div>
      <FooterOne />
      <FooterTwo />
    </>
  );
}
