import React from 'react';
import ContentLoader from 'react-content-loader';
import "./_simple_item_carousel_background.scss";

const SimpleItemCarouselBackgroundLoader = () => {
    return (
        <div 
            className='simple__item__carousel__background__loader__wrapper' 
            style={{margin: "30px 0"}}
        >
            <ContentLoader
                viewBox={`0 0 ${1088} ${462}`}
                height={462}
                width={1088}
                color='#fff'
            >
                <rect x="48" y="110" rx="10" ry="10" width="300" height="20" />
                <rect x="48" y="148" rx="10" ry="10" width="241" height="260" />
                <rect x="299" y="148" rx="10" ry="10" width="241" height="260" />
                <rect x="550" y="148" rx="10" ry="10" width="241" height="260" />
                <rect x="801" y="148" rx="10" ry="10" width="241" height="260" />
            </ContentLoader>
        </div>
    )
}

export default SimpleItemCarouselBackgroundLoader
