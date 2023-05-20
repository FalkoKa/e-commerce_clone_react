import { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { userContext } from '../userConext';

export default function DropdownItem({ quantity, item }) {
  let { user, setCart, cart } = useContext(userContext);
  const removeFromCart = (e) => {
    if (user) {
      axios
        .delete(
          `https://e-commercecloneapi-production.up.railway.app/api/v1/cart/${user._id}`,
          { data: { itemId: item._id } }
        )
        .then((res) => {
          setCart(res.data.items);
        });
    } else {
      let itemsInLocal = JSON.parse(localStorage.getItem('cartLocal'));
      const newItemsInLocal = itemsInLocal.filter((i) =>
        i.item._id !== item._id ? true : false
      );
      localStorage.setItem('cartLocal', JSON.stringify(newItemsInLocal));
      setCart(newItemsInLocal);
    }
  };

  return (
    <article
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '5px',
        width: '100%',
        fontSize: '0.8rem',
        padding: '4px',
      }}
    >
      <img style={{ width: '100px' }} src={item.images[0]} alt="/" />
      <div
        style={{
          width: '130px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
        }}
      >
        <div>
          <p>{item.name}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <p>{(item.price * quantity).toFixed(2)} USD</p>
        <button
          style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center' }}
          onClick={removeFromCart}
        >
          <DeleteIcon size={10} /> <span>Remove</span>
        </button>
      </div>
    </article>
  );
}
