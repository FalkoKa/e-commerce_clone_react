import { Link } from 'react-router-dom';
import './Checkout.css';
import Logo from '../../components/Logo/Logo';
import { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Login', 'Confrim', 'Done!'];

export default function OrderConfirm(props) {
  const [activeStep, setActiveStep] = useState(1);
  const [skipped, setSkipped] = useState(new Set());

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className="order-confirmation">
      <div className="container-width-85">
        <Logo />

        <header className="order-conformation">
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
          <h3>ORDER SUMMARY</h3>

          <div onClick={handleNext} className="order-confirmation-link">
            PLACE YOUR ORDER
          </div>
        </header>
      </div>
    </div>
  );
}
