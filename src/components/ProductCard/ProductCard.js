import { Link } from 'react-router-dom';
import './ProductCard.css';
import FavoriteListIcon from '../FavoriteListIcon';
import Rating from '@mui/material/Rating';

export default function ProductCard({ product }) {
  return (
    <Link to={`/${product.category}/${product._id}`}>
      <div className="card">
        <img src={product.images[0]} alt="pic" />
        <FavoriteListIcon size={{ size: 30, width: '30px' }} />
        <section>
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              margin: '8px auto',
            }}
            className="rating-read-only"
          >
            {
              <Rating
                name="read-only"
                value={product.rating === 0 ? null : product.rating}
                readOnly
                precision={0.5}
                size="large"
                style={{ color: 'black' }}
              />
            }
            {product.numReviews}
          </p>
          <p>{product.brand}</p>
          <p>{product.name}</p>
          <p className="price">{product.price} USD</p>
        </section>
      </div>
    </Link>
  );
}
