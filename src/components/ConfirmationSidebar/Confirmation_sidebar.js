export default function ConfirmationSidebar() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div className="delivery-address">
        <h3>DELIEVERY ADDRESS</h3>
        <p className="fullName">Falko Kammel</p>
        <p className="address">Schoenauerstrasse 16</p>
        <p className="zip-city">67547 Worms</p>
        <p className="country">Germany</p>
      </div>
      <div className="payment-info">
        <h3>PAYMENT METHOD</h3>
        <p>MasterCard</p>
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
