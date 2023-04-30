import { useState, useContext } from 'react';
import './Item.css';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { userContext } from '../../userConext';

export default function Item({ item, quant }) {
  let { user, setCart } = useContext(userContext);

  const [quantity, setQuantity] = useState(quant);

  const changeQuantity = (e) => {
    setQuantity(e.target.value);

    let itemInLocalStorage = JSON.parse(localStorage.getItem('cartLocal'));
    let index = itemInLocalStorage.map((i) => i.item._id).indexOf(item._id);
    itemInLocalStorage[index].quantity = e.target.value;
    localStorage.setItem('cartLocal', JSON.stringify(itemInLocalStorage));
    setCart(itemInLocalStorage);
  };

  const removeFromCart = (e) => {
    if (user) {
      axios
        .delete(`/api/v1/cart/${user._id}`, { data: { itemId: item._id } })
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
    <div className="item">
      <div className="item-summary">
        <img src={item.images[0]} />
        <div className="item-info">
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <button onClick={removeFromCart}>
            <DeleteIcon /> <span>Remove</span>
          </button>
        </div>
      </div>
      <div className="price">
        <select
          onChange={changeQuantity}
          name="quantity"
          id="quantity"
          value={quantity}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
        <p>{(item.price * quantity).toFixed(2)} USD</p>
      </div>
    </div>
  );
}
