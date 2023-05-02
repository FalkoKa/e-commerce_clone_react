import { useState, useEffect, useContext } from 'react';
import { userContext } from '../../userConext';
import './OrderSummary.css';
import axios from 'axios';
import Loading from '../Loading';

export default function OrderSummary() {
  let { user } = useContext(userContext);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    axios.get(`/api/v1/order/all/${user.id}`).then((res) => {
      setOrders(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`/api/v1/order/all/${user._id}`).then((res) => {
      setOrders(res.data);
    });
  }, [user]);

  return (
    <div className="order-summary">
      {!orders ? (
        <Loading />
      ) : (
        orders.map((order) => (
          <div className="ordered-item">
            <h3>Order ID: {order._id}</h3>
            <h4>Payment: {order.payment}</h4>
            <p>Ordered Items: {order.orderedItems.length}</p>
            <p>Total: {order.subTotal + order.deliveryFee} USD</p>
            <h4>Status: {order.orderStatus}</h4>
          </div>
        ))
      )}
    </div>
  );
}
