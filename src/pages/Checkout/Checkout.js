import './Checkout.css';
import Logo from '../../components/Logo/Logo';
import { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import OrderConfirmation from './Order_confirmation';
import Address from '../../components/Address/Address';
import PaymentMethod from '../../components/Payment_method/Payment_method';
import CheckoutSuccess from './Checkout_success';

const steps = ['Login', 'Address', 'Payment', 'Confirm', 'Done!'];

export default function Checkout(props) {
  const [activeStep, setActiveStep] = useState(1);
  const [skipped, setSkipped] = useState(new Set());

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

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
        {activeStep === 1 ? <Address handleNext={handleNext} /> : ''}
        {activeStep === 2 ? <PaymentMethod handleNext={handleNext} /> : ''}
        {activeStep === 3 ? <OrderConfirmation handleNext={handleNext} /> : ''}
        {activeStep === 4 ? <CheckoutSuccess /> : ''}
      </div>
    </>
  );
}