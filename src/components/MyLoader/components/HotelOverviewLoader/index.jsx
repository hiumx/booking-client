import React from 'react';
import ContentLoader from 'react-content-loader';

const HotelOverviewLoader = () => {
    return (
        <div className='' style={{margin: "30px 0"}}>
            <ContentLoader
                viewBox={`0 0 ${1088} ${456}`}
                height={456}
                width={1088}
                color='#fff'
            >
                <rect x="0" y="0" rx="10" ry="10" width="348" height="456" />
                <rect x="370" y="0" rx="10" ry="10" width="348" height="456" />
                <rect x="740" y="0" rx="10" ry="10" width="348" height="456" />
            </ContentLoader>
        </div>
    )
}

export default HotelOverviewLoader
