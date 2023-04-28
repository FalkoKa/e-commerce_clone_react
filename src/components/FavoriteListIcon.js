import { CiHeart } from 'react-icons/ci';

export default function FavoriteListIcon({ position, size }) {
  return (
    <div
      style={{
        border: '1px solid black',
        width: size.width,
        height: size.width,
        position: position,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        top: '0',
        right: '0',
      }}
      className="fav-list-ic"
    >
      <CiHeart size={size.size} />
    </div>
  );
}
