import Rating from '@mui/material/Rating';

export default function RatingStars({ numReviews, rating }) {
  return (
    <p
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        margin: '8px 0',
      }}
      className="rating-read-only"
    >
      {
        <Rating
          name="read-only"
          value={rating === 0 ? null : rating}
          readOnly
          precision={0.5}
          size="large"
          style={{ color: 'black' }}
        />
      }
      {numReviews}
    </p>
  );
}
