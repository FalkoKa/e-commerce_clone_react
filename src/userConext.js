import { createContext, useEffect, useState } from 'react';
import { getUser } from './utils/user_service';
import axios from 'axios';

export const userContext = createContext();

export function UserProvider(props) {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});
  const [cartID, setCartID] = useState(null);

  // useEffect(() => {
  //   if (user) {
  //     axios.get(`api/v1/cart/${user._id}`).then((res) => {
  //       console.log(res.data.items);
  //       setCart(res.data.items);
  //     });
  //   } else {
  //     // later local storage
  //     return;
  //   }
  // }, [user]);

  useEffect(() => {
    if (user) {
      axios
        .get(`/api/v1/cart/${user._id}`)
        .then((res) => {
          console.log(res.data.items);
          setCart(res.data.items);
          setCartID(res.data._id);
        })
        .catch((err) => console.log(err));
    } else {
      setCart(JSON.parse(localStorage.getItem('cartLocal') || '[]'));
    }
  }, [user]);

  const login = (data) => {
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setCart([]);
  };

  const value = {
    user,
    login,
    logout,
    cart,
    setCart,
    order,
    setOrder,
    cartID,
    setCartID,
  };

  return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
  );
}

// shopping cart state
// add items if not logged in -> logal storage
// add items if logged in -> db + the ones from local storage

// stored like this : [{itemID, quantity}]

// functions: addItemToCart, removeItemFromCart

// getCart() to fetch data from db || from localStorage, save it in cart useState (getCart in cart_service.js)

// backend
// get cart: get the cart by userID
// post cart: add one item to array by productID
// remove cart: remove one item from array by productID
// reset cart? after ordered from userID
