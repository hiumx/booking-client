import React from 'react';
import ContentLoader from 'react-content-loader';

const SimpleItemCarouselLoader = () => {
    return (
        <div className='' style={{margin: "30px 0"}}>
            <ContentLoader
                viewBox={`0 0 ${1088} ${260}`}
                height={260}
                width={1088}
                color='#fff'
            >
                <rect x="0" y="0" rx="10" ry="10" width="264" height="260" />
                <rect x="274" y="0" rx="10" ry="10" width="264" height="260" />
                <rect x="548" y="0" rx="10" ry="10" width="264" height="260" />
                <rect x="822" y="0" rx="10" ry="10" width="264" height="260" />
            </ContentLoader>
        </div>
    )
}

export default SimpleItemCarouselLoader
