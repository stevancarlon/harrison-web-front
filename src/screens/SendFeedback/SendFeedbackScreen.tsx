import { useState } from 'react';
import { FirstStep } from './components/FirstStep';
import { SecondStep } from './components/SecondStep';
import { ThirdStep } from './components/ThirdStep';
import { FourthStep } from './components/FourthStep';
import { FifthStep } from './components/FifthStep';

export const SendFeedbackScreen = () => {
  const [step, setStep] = useState(5); // setStep will be used for navigation between steps

  switch (step) {
    case 1:
      return <FirstStep />;
    case 2:
      return <SecondStep />;
    case 3:
      return <ThirdStep />;
    case 4:
      return <FourthStep />;
    case 5:
      return <FifthStep />;
    default:
      return <FirstStep />;
  }
};
