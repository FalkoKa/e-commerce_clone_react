import Header from '../../components/Header/Header';
import NavBar from '../../components/Navbar.js/Navbar';
import CategoryNav from '../../components/Categories_nav/Categories_nav';
import FooterOne from '../../components/Footer_one/Footer_one';
import FooterTwo from '../../components/Fotter_two/Footer_two';
import RatingStars from '../../components/RatingStars/RatingStars';
import FavoriteListIcon from '../../components/FavoriteListIcon';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import Loading from '../../components/Loading';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../../userConext';
import './Product_details.css';

const availability = (inStock) => {
  if (inStock === 0) {
    return 'Item sold out';
  } else if (inStock < 10) {
    return 'Almost out of stock';
  } else {
    return 'Item in Stock';
  }
};

export default function ProcutDetails() {
  let product = useParams();
  let { user, setCart, cart } = useContext(userContext);

  const [item, setItem] = useState(null);
  const [hasPurchased, setHasPurchased] = useState(false);
  const [value, setValue] = useState(0);

  // useEffect() return from server if order with userID and productID exists (true or false,) -> set hasPurchased ? true : false

  // send to server increment of rating and new calculated average of rating (send to product colellection with productID).then(update setItem)

  useEffect(() => {
    axios
      .get(`/api/v1/product/${product.id}`)
      .then((res) => setItem(res.data.product));
  }, [product.id]);

  const addToCart = (e) => {
    if (user) {
      axios
        .post(`/api/v1/cart/${user._id}`, { itemId: product.id })
        .then((res) => {
          setCart(res.data.items);
        });
    } else {
      if (localStorage.getItem('cartLocal') !== null) {
        let itemInLocalStorage = JSON.parse(localStorage.getItem('cartLocal'));

        let index = itemInLocalStorage
          .map((i) => i.item._id)
          .indexOf(product.id);

        if (index !== -1) {
          itemInLocalStorage[index].quantity =
            Number(itemInLocalStorage[index].quantity) + 1;
          localStorage.setItem('cartLocal', JSON.stringify(itemInLocalStorage));
          setCart(itemInLocalStorage);
        } else {
          itemInLocalStorage.push({ quantity: 1, item: item });
          localStorage.setItem('cartLocal', JSON.stringify(itemInLocalStorage));
          setCart(itemInLocalStorage);
        }
      } else {
        let itemLocalStorage = [{ quantity: 1, item: item }];
        localStorage.setItem('cartLocal', JSON.stringify(itemLocalStorage));
      }
    }
  };

  return (
    <>
      <Header />
      <NavBar />
      <CategoryNav />
      {!item ? (
        <Loading />
      ) : (
        <div className="product-details container-width-85">
          <div className="product-img">
            <img src={item.images[0]} alt="Product" />
          </div>
          <div className="product-info">
            <h2>{item.brand}</h2>
            <h1>{item.name}</h1>
            <h3>{item.price} USD</h3>
            {!hasPurchased ? (
              <RatingStars numReviews={item.numReviews} rating={item.rating} />
            ) : (
              <p
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  margin: '8px 0',
                }}
              >
                <Rating
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  precision={0.5}
                  size="large"
                  style={{ color: 'black' }}
                />
                {item.numReviews}
              </p>
            )}
            <div className="controlls">
              <FavoriteListIcon
                position={'relative'}
                size={{ size: 40, width: '40px' }}
              />
              {item.inStock === 0 ? (
                <div
                  style={{ backgroundColor: 'grey' }}
                  className="order-confirmation-link"
                >
                  Add to cart
                </div>
              ) : (
                <div onClick={addToCart} className="order-confirmation-link">
                  Add to cart
                </div>
              )}
            </div>
            <p>{availability(item.inStock)}</p>
          </div>
          <button onClick={() => setHasPurchased(!hasPurchased)}>bought</button>
        </div>
      )}
      <FooterOne />
      <FooterTwo />
    </>
  );
}
