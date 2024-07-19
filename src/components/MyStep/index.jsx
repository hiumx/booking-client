import React, { useState } from 'react';
import Steps from 'rc-steps';
import 'rc-steps/assets/index.css';
import "./_my_step.scss";
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';

const MyStep = ({ currentStep = 1, setCurrentStep, handleClickPrevStep, handleClickNextStep, children }) => {
   
    return (
        // <CheckoutLayout>
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
            {children}
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
        // </CheckoutLayout >
    )
}

export default MyStep