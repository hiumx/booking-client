import React from 'react';
import ContentLoader from 'react-content-loader';
import "./_hotel_item_loader.scss";

const HotelItemLoader = () => {
    return (
        <div className='hotel__item__loader__wrapper'>
            <ContentLoader
                viewBox={`0 0 ${800} ${274}`}
                height={274}
                width={800}
                color='#fff'
            >
                <rect x="16" y="16" rx="10" ry="10" width="240" height="240" />
                <rect x="288" y="16" rx="5" ry="5" width="200" height="23" />
                <rect x="288" y="50" rx="5" ry="5" width="300" height="13" />
                <rect x="288" y="160" rx="5" ry="5" width="100" height="13" />
                <rect x="288" y="180" rx="5" ry="5" width="200" height="13" />
                <rect x="288" y="200" rx="5" ry="5" width="200" height="13" />
                <rect x="288" y="220" rx="5" ry="5" width="300" height="13" />
                <rect x="288" y="240" rx="5" ry="5" width="296" height="13" />
                <rect x="650" y="226" rx="5" ry="5" width="134" height="30" />
                <rect x="610" y="200" rx="5" ry="5" width="176" height="16" />
                <rect x="700" y="162" rx="5" ry="5" width="86" height="26" />
                <rect x="670" y="140" rx="5" ry="5" width="116" height="13" />
                <rect x="670" y="15" rx="5" ry="5" width="116" height="80" />
            </ContentLoader>
        </div>
    )
}

export default HotelItemLoader
