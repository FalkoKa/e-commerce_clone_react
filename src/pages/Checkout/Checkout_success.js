import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import { userContext } from '../../userConext';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Logo from '../../components/Logo/Logo';

const steps = ['Login', 'Address', 'Payment', 'Confirm', 'Done!'];

export default function CheckoutSuccess() {
  let { user } = useContext(userContext);
  const [orderID, setOrderID] = useState('');
  const [activeStep, setActiveStep] = useState(5);

  useEffect(() => {
    axios
      .get(
        `https://e-commercecloneapi-production.up.railway.app/api/v1/order/${user._id}` // added _
      )
      .then((res) => {
        console.log(res.data);
        setOrderID(res.data._id);
      });
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
          <h1>Thanks for your order!</h1>
          <p>Your order ID #{orderID}</p>
          <Link to={'/home'}>
            <div className="order-confirmation-link">Continue Shopping</div>
          </Link>
        </div>
      </div>
    </>
  );
}
