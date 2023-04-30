import { useContext } from 'react';
import { userContext } from '../../userConext';

export default function ConfirmationSidebar() {
  let { order, user } = useContext(userContext);

  const renderPaymentMethod = (payMethod) => {
    if (payMethod === 'paypal') {
      return 'PayPal';
    } else if (payMethod === 'credit-debit') {
      return 'MasterCard / Visa';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div className="delivery-address">
        <h3>DELIEVERY ADDRESS</h3>
        <p className="fullName">{user.name}</p>
        <p className="address">{order.shippingAddress.street}</p>
        <p className="zip-city">
          {order.shippingAddress.zipCode} {order.shippingAddress.city}
        </p>
        <p className="country">{order.shippingAddress.country}</p>
      </div>
      <div className="payment-info">
        <h3>PAYMENT METHOD</h3>
        <p>{renderPaymentMethod(order.paymentMethod)}</p>
      </div>
      <div className="legal-notice">
        <p style={{ color: 'grey', fontSize: '0.8rem' }}>
          By placing an order at en.zalando.de, you’re agreeing to our Privacy
          Policy, Terms and Conditions and Cancellation policy. You also confirm
          that this purchase is for personal use only. Actually you will never
          receive any product, any payment will be seen as donation
        </p>
      </div>
    </div>
  );
}
