import { Link } from 'react-router-dom';
import './ProductCard.css';
import FavoriteListIcon from '../FavoriteListIcon';
import { useState } from 'react';
import RatingStars from '../RatingStars/RatingStars';

export default function ProductCard({ product }) {
  const [imgSrc, setImgSrc] = useState(0);

  return (
    <Link to={`/${product.category}/${product._id}`}>
      <div
        onMouseLeave={() => setImgSrc(0)}
        onMouseEnter={() => setImgSrc(1)}
        className="card"
      >
        <img src={product.images[imgSrc]} alt="pic" />
        <FavoriteListIcon
          position={'absolute'}
          size={{ size: 30, width: '30px' }}
        />
        <section>
          <RatingStars
            numReviews={product.numReviews}
            rating={product.rating}
          />
          <p>{product.brand}</p>
          <p>{product.name}</p>
          <p className="price">{product.price} USD</p>
        </section>
      </div>
    </Link>
  );
}
