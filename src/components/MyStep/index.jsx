import React, { useState } from 'react';
import Steps from 'rc-steps';
import 'rc-steps/assets/index.css';
import "./_my_step.scss";
import CheckoutLayout from '~/layouts/CheckoutLayout';
import Booking from '~/pages/Booking';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';
import { useNavigate } from 'react-router-dom';

const MyStep = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const navigator = useNavigate();

    const handleClickPrevStep = () => {
        if(currentStep === 1) {
            navigator("/");
        }

        setCurrentStep(prev => prev - 1);
    }

    const handleClickNextStep = () => {
        window.scrollTo(0, 0);
        setCurrentStep(prev => prev + 1);
    }

    return (
        <CheckoutLayout>
            <div className='my__step__wrapper'>
                <Steps
                    current={currentStep}
                    status="process"
                    // icons={icons}
                    className=''
                    items={[
                        { title: 'Your selection', description: "Your selection" },
                        { title: 'Your details', description: "Information about you" },
                        { title: 'Final step', description: "Payment step" },
                    ]}
                />
                <div className='my__step__content'>
                    {currentStep == 1 && <Booking currentStep={currentStep}/>}
                    {currentStep == 2 && <Booking currentStep={currentStep}/>}
                </div>
                <div className='my__step__btn'>
                    <button
                        className='my__step__prev__btn'
                        onClick={handleClickPrevStep}
                    >
                        <ChevronLeftIcon width='14px' height='14px' fill='#fff' />
                        <p>Previous step</p>
                    </button>
                    <button
                        className='my__step__next__btn'
                        onClick={handleClickNextStep}
                    >
                        <p>Next: Final details</p>
                        <ChevronRightIcon width='14px' height='14px' fill='#fff' />
                    </button>
                </div>

            </div>
        </CheckoutLayout >
    )
}

export default MyStep