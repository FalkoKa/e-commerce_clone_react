import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import { userContext } from '../../userConext';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Logo from '../../components/Logo/Logo';
import Loading from '../../components/Loading';

const steps = ['Login', 'Address', 'Payment', 'Confirm', 'Done!'];

export default function CheckoutSuccess() {
  let { user, order, cart, setCart, setOrder } = useContext(userContext);

  const [orderID, setOrderID] = useState('');
  const [activeStep, setActiveStep] = useState(5);
  const [success, setSuccess] = useState('loading');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setCart((prev) => {
        let localCart = JSON.parse(localStorage.getItem('currentCart'));
        console.log(localCart);
        return [...prev, localCart];
      });
      setOrder((prev) => {
        let localOrder = JSON.parse(localStorage.getItem('currentOrder'));
        console.log(localOrder);
        return { ...prev, localOrder };
      });
      console.log(order);
      console.log(cart);

      const orderToSubmit = {
        ...order,
        id: user._id,
        orderedItems: cart.map((i) => {
          return { quantity: i.quantity, items: i.item._id };
        }),
      };
      console.log(orderToSubmit);
      setSuccess('success');
      axios
        .post(
          `https://e-commercecloneapi-production.up.railway.app/api/v1/order/new`,
          orderToSubmit
        )
        .then(() => {
          setCart([]);
          localStorage.removeItem('currentOrder');
          localStorage.removeItem('currentCart');
          localStorage.removeItem('cartLocal');
          axios.delete(
            `https://e-commercecloneapi-production.up.railway.app/api/v1/cart/delete/${user._id}`
          );
        })
        .then(() => {
          axios.get(
            `https://e-commercecloneapi-production.up.railway.app/api/v1/order/${user._id}`
          );
        })
        .then((res) => {
          setOrderID(res.data._id);
        })
        .catch((err) => console.log(err));
    } else {
      setSuccess('canceled');
    }
  }, []);

  return (
    <>
      <div className="container-width-85">
        <Logo />
      </div>
      <div className="container-width-60">
        <div className="stepper-wrapper">
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        <div className="checkout-success">
          {success === 'loading' ? <Loading /> : ''}
          {success === 'canceled' ? (
            <>
              <h1>Order canceled</h1>
              <p>
                Continue to shop around and checkout when you are ready.
              </p>{' '}
              <Link to={'/home'}>
                <div className="order-confirmation-link">Continue Shopping</div>
              </Link>
            </>
          ) : (
            ''
          )}
          {success === 'success' ? (
            <>
              <h1>Thanks for your order!</h1>
              <p>Your order ID #{orderID}</p>
              <Link to={'/home'}>
                <div className="order-confirmation-link">Continue Shopping</div>
              </Link>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}
