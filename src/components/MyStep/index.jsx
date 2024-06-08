import React from 'react';
import Steps from 'rc-steps';
import 'rc-steps/assets/index.css';
import "./_my_step.scss";

const MyStep = () => {
    const description = 'This is a description';

    return (
        <div className='my__step__wrapper'>
            <Steps
                current={0}
                // status="wait"
                // icons={icons}
                items={[
                    { title: 'Your selection', description: "Your selection" },
                    { title: 'Your details', description: "Information about you" },
                    { title: 'Final step', description: "Payment step" },
                ]}
            />
        </div>
    )
}

export default MyStep