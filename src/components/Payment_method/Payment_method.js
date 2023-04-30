import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState, useContext } from 'react';
import CreditCards from './../../images/credit_card_white.png';
import PayPal from './../../images/paypal.png';
import { userContext } from '../../userConext';

export default function PaymentMethod({ handleNext, handleChange }) {
  let { setOrder, order } = useContext(userContext);
  const [paymentMethod, setPaymentMethod] = useState('credit-debit');

  const handleSelect = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder({ ...order, paymentMethod: paymentMethod });
    handleNext();
  };

  return (
    <div className="payment-methos">
      <h3 style={{ margin: '20px 0' }}>Payment Method</h3>

      <form onSubmit={handleSubmit} className="login-form">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="payment_method"
            value={paymentMethod}
            onChange={handleSelect}
          >
            <FormControlLabel
              value="credit-debit"
              control={<Radio />}
              label="Credit / Debit Card"
            />
            <img
              style={{ width: '200px' }}
              src={CreditCards}
              alt="creditcards"
            />
            {paymentMethod === 'credit-debit' ? (
              <>
                <p>Debit</p>
              </>
            ) : (
              ''
            )}
            <FormControlLabel
              value="paypal"
              control={<Radio />}
              label="PayPal"
            />
            <img style={{ width: '50px' }} src={PayPal} alt="paypal" />
            {paymentMethod === 'paypal' ? (
              <>
                <p>You’ll be forwarded to PayPal to complete your payment.</p>
              </>
            ) : (
              ''
            )}
          </RadioGroup>
        </FormControl>

        <button>NEXT</button>
      </form>
    </div>
  );
}
