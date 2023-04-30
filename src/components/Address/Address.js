import TextField from '@mui/material/TextField';
import { useState, useContext } from 'react';
import { userContext } from '../../userConext';

export default function Address({ handleNext }) {
  let { order, setOrder } = useContext(userContext);
  const [address, setAddress] = useState({});

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder({ ...order, shippingAddress: address });
    handleNext();
  };

  return (
    <div className="delivery-address">
      <h3 style={{ margin: '20px 0' }}>DELIVERY ADRESS</h3>

      <form onSubmit={handleSubmit} className="login-form">
        <TextField
          onChange={handleChange}
          autoComplete="off"
          required
          id="outlined-required"
          label="Address line 1"
          size="small"
          fullWidth
          name="street"
        />
        <TextField
          onChange={handleChange}
          autoComplete="off"
          required
          id="outlined-required"
          label="Postal Code"
          size="small"
          fullWidth
          name="zipCode"
        />
        <TextField
          onChange={handleChange}
          autoComplete="off"
          required
          id="outlined-required"
          label="Town / City"
          size="small"
          fullWidth
          name="city"
        />
        <TextField
          onChange={handleChange}
          autoComplete="off"
          required
          label="Country"
          size="small"
          fullWidth
          name="country"
        />
        <button>NEXT</button>
      </form>
    </div>
  );
}
