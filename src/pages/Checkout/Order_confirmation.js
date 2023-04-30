import ConfirmationSidebar from '../../components/ConfirmationSidebar/Confirmation_sidebar';
import Item from '../../components/Item/Item';
import { useContext } from 'react';
import { userContext } from '../../userConext';
import axios from 'axios';

export default function OrderConfirmation({ handleNext }) {
  let { user, order, cart, setCart } = useContext(userContext);

  const handleOrderSubmit = () => {
    const orderToSubmit = {
      ...order,
      id: user._id,
      orderedItems: cart,
    };

    console.log(orderToSubmit);
    axios.post(`/api/v1/order/new`, orderToSubmit);
    setCart([]);
    axios
      .delete(`/api/v1/cart/delete/${user._id}`)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    localStorage.removeItem('cartLocal');
  };

  return (
    <div className="order-confirmation">
      <header className="order-conformation">
        <div className="order-summary">
          <h3>ORDER SUMMARY</h3>

          <div
            onClick={() => {
              handleNext();
              handleOrderSubmit();
            }}
            className="order-confirmation-link"
          >
            PLACE YOUR ORDER
          </div>
        </div>
      </header>
      <div className="grid-wrapper">
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          className="item-wrapper"
        >
          {cart.map((item) => (
            <Item
              inOrder={true}
              key={item._id}
              quant={item.quantity}
              item={item.item}
            />
          ))}
        </div>
        <ConfirmationSidebar />
      </div>
      <div
        style={{
          backgroundColor: '#f3f3f3',
          padding: '20px',
          width: '70%',
          margin: '20px auto',
        }}
        className="order-total"
      >
        <div className="flex">
          <span>Delivery</span>
          <span>{order.deliveryFee} USD</span>
        </div>
        <div className="flex">
          <span>Total (VAT included)</span>
          <span>{order.subTotal + order.deliveryFee} USD</span>
        </div>

        <div
          onClick={() => {
            handleNext();
            handleOrderSubmit();
          }}
          style={{ width: '250px', margin: '20px auto', cursor: 'pointer' }}
          className="checkout-link"
        >
          PLACE YOUR ORDER
        </div>
      </div>
    </div>
  );
}
