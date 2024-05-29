import React from 'react'
import "./_more_detail_button.scss";

const MoreDetailButton = () => {
    return (
        <div className='mdb__wrapper'>
            <div className='mdb__title'>
                <span>Free airport taxi</span>
                <div className='mdb__more__detail'>
                    <h4 className='mdb__more__detail__title'>Limited-time Deal</h4>
                    <p
                        className='mdb__more__detail__description'
                    >
                        You’re getting a reduced rate because this property has a limited-time deal running. These deals only last up to 48 hours.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MoreDetailButton
