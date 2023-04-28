import { Link } from 'react-router-dom';
import ConfirmationSidebar from '../../components/ConfirmationSidebar/Confirmation_sidebar';
import Item from '../../components/Item/Item';

export default function OrderConfirmation({ handleNext }) {
  return (
    <div className="order-confirmation">
      <header className="order-conformation">
        <div className="order-summary">
          <h3>ORDER SUMMARY</h3>

          <div onClick={handleNext} className="order-confirmation-link">
            PLACE YOUR ORDER
          </div>
        </div>
      </header>
      <div className="grid-wrapper">
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          className="item-wrapper"
        >
          <Item />
          <Item />
          <Item />
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
          <span>0.00 $</span>
        </div>
        <div className="flex">
          <span>Total (VAT included)</span>
          <span>29.99 $</span>
        </div>

        <div
          onClick={handleNext}
          style={{ width: '250px', margin: '20px auto' }}
          className="checkout-link"
        >
          PLACE YOUR ORDER
        </div>
      </div>
    </div>
  );
}
